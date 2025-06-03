import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

async function main() {
  await prismaClient.availableTriggers.create({
    data: {
      id: "webhook",
      name: "Webhook",
      image:
        "https://mailparser.io/wp-content/uploads/2018/08/what-is-a-webhook-1024x536.jpeg",
    },
  });

  await prismaClient.availableActions.create({
    data: {
      id: "send-sol",
      name: "Send Solana",
      image:
        "https://s3.coinmarketcap.com/static-gravity/image/5cc0b99a8dd84fbfa4e150d84b5531f2.png",
    },
  });
  await prismaClient.availableActions.create({
    data: {
      id: "email",
      name: "Send Email",
      image:
        "https://media.istockphoto.com/id/1125279178/vector/mail-line-icon.jpg?s=612x612&w=0&k=20&c=NASq4hMg0b6UP9V0ru4kxL2-J114O3TaakI467Pzjzw=",
    },
  });
}
main();
