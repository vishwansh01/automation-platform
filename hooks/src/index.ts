import { PrismaClient } from "@prisma/client";
import express from "express";
const app = express();
const client = new PrismaClient();
app.use(express.json());
app.post("/hooks/catch/:userId/:zapId", async (req, res) => {
  const userId = req.params.userId;
  const zapId = req.params.zapId;
  const body = req.body;
  // console.log("HDF");
  await client.$transaction(async (tx) => {
    const run = await tx.zapRun.create({
      data: {
        zapId: zapId,
        metadata: body,
      },
    });
    await tx.zapRunOutbox.create({
      data: {
        zapRunId: run.id,
      },
    });
  });
  res.json({
    message: "Webhook received",
  });
});

// app.post("/hooks/catch/:userId/:zapId", (req, res) => {
//   console.log("Hit");
//   res.json({
//     message: "Hit",
//   });
// });

app.listen(3002, () => {
  console.log("Server running on port 3002");
});
