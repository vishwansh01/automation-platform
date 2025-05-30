import { Router } from "express";
import { authMiddleware } from "../middleware";
import { ZapCreateSchema } from "../types";
import { prismaClient } from "../db";
import { Request } from "express";

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
  if (!id) {
    return res.status(400);
  }
  const zap = await prismaClient.zap.create({
    data: {
      userId: parseInt(id),
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
          metadata: act.actionMetaData,
        })),
      },
    },
  });
  return res.json(zap.id);
});

router.get("/", authMiddleware, async (req: Request, res) => {
  const id = req.id;
  if (!id) {
    return res.status(400);
  }
  const zaps = await prismaClient.zap.findMany({
    where: {
      userId: parseInt(id),
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
  if (!id) {
    return res.status(400);
  }
  const zaps = await prismaClient.zap.findMany({
    where: {
      id: zapId,
      userId: parseInt(id),
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
