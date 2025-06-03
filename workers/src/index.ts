require("dotenv").config();
import { PrismaClient } from "@prisma/client";
import { Kafka } from "kafkajs";
import { parse } from "./parser";
import { JsonObject } from "@prisma/client/runtime/library";
import { sendMail } from "./email";
import { sendSol } from "./solana";

const TOPIC_NAME = "zap-events";

const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: ["localhost:9092"],
});
const prismaClient = new PrismaClient();

async function main() {
  const consumer = kafka.consumer({ groupId: "main-worker" });
  await consumer.connect();
  await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });
  const producer = kafka.producer();
  await producer.connect();
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: (message.value || "{}").toString(),
      });
      const parsedValue = JSON.parse(message.value!.toString());
      const zapRunId = parsedValue.zapRunId;
      const stage = parsedValue.stage;
      const zapRunDetails = await prismaClient.zapRun.findFirst({
        where: {
          id: zapRunId,
        },
        include: {
          zap: {
            include: {
              actions: {
                include: { type: true },
              },
            },
          },
        },
      });
      const currentAction = zapRunDetails?.zap.actions.find(
        (x) => x.sortingOrder === stage
      );
      if (!currentAction) {
        console.log("Current Action not found");
        return;
      }

      const zapRunMetadata = zapRunDetails?.metadata;
      if (currentAction.type.id === "email") {
        const body = parse(
          (currentAction.metadata as JsonObject)?.body as string,
          zapRunMetadata
        );
        const to = parse(
          (currentAction.metadata as JsonObject)?.email as string,
          zapRunMetadata
        );
        console.log(`Sending out an email to ${to} body is ${body}`);
        await sendMail(to, body);
      }
      if (currentAction.type.id === "send-solana") {
        const amount = parse(
          (currentAction.metadata as JsonObject)?.amount as string,
          zapRunMetadata
        );
        const address = parse(
          (currentAction.metadata as JsonObject)?.address as string,
          zapRunMetadata
        );
        console.log(`Sending out SOL of ${amount} to address ${address}`);
        await sendSol(address, amount);
      }

      await new Promise((r) => setTimeout(r, 500));
      const zapId = message.value!.toString();
      const lastStage = (zapRunDetails?.zap.actions.length || 1) - 1;
      console.log("processing done");
      if (lastStage !== stage) {
        await producer.send({
          topic: TOPIC_NAME,

          messages: [
            {
              value: JSON.stringify({ zapRunId: zapRunId, stage: stage + 1 }),
            },
          ],
        });
      }
      consumer.commitOffsets([
        {
          topic: TOPIC_NAME,
          partition: partition,
          offset: (parseInt(message.offset) + 1).toString(),
        },
      ]);
    },
  });
}
main();
