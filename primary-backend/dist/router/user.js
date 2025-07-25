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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
const types_1 = require("../types");
const db_1 = require("../db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const router = (0, express_1.Router)();
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const parsedData = types_1.SignupSchema.safeParse(body);
    if (!parsedData.success) {
        return res.status(411).json({
            message: "Incorrect inputs",
        });
    }
    const userExists = yield db_1.prismaClient.user.findFirst({
        where: { email: parsedData.data.username },
    });
    if (userExists) {
        return res.status(403).json({
            message: "User already exists",
        });
    }
    yield db_1.prismaClient.user.create({
        data: {
            email: parsedData.data.username,
            password: parsedData.data.password,
            name: parsedData.data.name,
        },
    });
    return res.json({
        message: "Please verify your account",
    });
}));
router.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const parsedData = types_1.SigninSchema.safeParse(body);
    if (!parsedData.success) {
        return res.status(411).json({
            message: "Incorrect inputs",
        });
    }
    const user = yield db_1.prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username,
            password: parsedData.data.password,
        },
    });
    if (!user) {
        return res.status(403).json({ message: "Sorry credentials are incorrect" });
    }
    const token = jsonwebtoken_1.default.sign({
        id: user.id,
    }, config_1.JWT_PASSWORD);
    return res.json({ token: token });
}));
router.get("/", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.id;
    if (!id) {
        return res.status(400);
    }
    const user = yield db_1.prismaClient.user.findUnique({
        where: {
            id: parseInt(id),
        },
        select: {
            name: true,
            email: true,
        },
    });
    // if(!user){
    // }
    return res.json(user);
}));
router.get("/verify-token", middleware_1.authMiddleware, (req, res) => {
    return res.status(200).json({
        message: "Token is valid",
        userId: req.id,
    });
});
exports.userRouter = router;
