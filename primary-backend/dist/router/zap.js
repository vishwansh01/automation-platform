"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zapRouter = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
const types_1 = require("../types");
const db_1 = require("../db");
const router = (0, express_1.Router)();
router.post("/", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.id;
    const body = req.body;
    const parsedData = types_1.ZapCreateSchema.safeParse(body);
    if (!parsedData.success) {
        return res.status(411).json({
            message: "Incorrect inputs",
        });
    }
    if (!id) {
        return res.status(400);
    }
    const zap = yield db_1.prismaClient.zap.create({
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
                })),
            },
        },
    });
    return res.json(zap.id);
}));
router.get("/", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.id;
    if (!id) {
        return res.status(400);
    }
    const zaps = yield db_1.prismaClient.zap.findMany({
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
}));
router.get("/:zapId", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.id;
    const zapId = req.params.zapId;
    if (!id) {
        return res.status(400);
    }
    const zaps = yield db_1.prismaClient.zap.findMany({
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
}));
exports.zapRouter = router;
