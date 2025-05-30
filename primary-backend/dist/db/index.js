"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const prisma_1 = require("../../src/generated/prisma");
// import { PrismaClient } from "@prisma/client";
exports.prismaClient = new prisma_1.PrismaClient();
