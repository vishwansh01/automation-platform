import { Router } from "express";
import { authMiddleware } from "../middleware";
import { ZapCreateSchema } from "../types";
import { prismaClient } from "../db";

const router = Router();

router.post("/", authMiddleware, async (req, res) => {
  const id = req.id;
  const body = req.body;
  const parsedData = ZapCreateSchema.safeParse(body);
  if (!parsedData.success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }
  const zap = await prismaClient.zap.create({
    data: {
      userId: id,
      triggerId: parsedData.data.availableTriggerId,
      trigger: {
        create: {
          triggerId: parsedData.data.availableTriggerId,
        },
      },
      actions: {
        create: parsedData.data.actions.map((act, index) => ({
          actionId: act.availableActionId,
          sortingOrder: index,
        })),
      },
    },
  });
  return res.json(zap.id);
});

router.get("/", authMiddleware, async (req, res) => {
  const id = req.id;
  const zaps = await prismaClient.zap.findMany({
    where: {
      userId: id,
    },
    include: {
      actions: { include: { type: true } },
      trigger: { include: { type: true } },
    },
  });
  return res.json({
    zaps,
  });
});
router.get("/:zapId", authMiddleware, async (req, res) => {
  const id = req.id;
  const zapId = req.params.zapId;
  const zaps = await prismaClient.zap.findMany({
    where: {
      id: zapId,
      userId: id,
    },
    include: {
      actions: { include: { type: true } },
      trigger: { include: { type: true } },
    },
  });
  return res.json({
    zaps,
  });
});

export const zapRouter = router;
