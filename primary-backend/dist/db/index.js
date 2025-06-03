"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
// import { PrismaClient } from "../../src/generated/prisma";
const client_1 = require("@prisma/client");
exports.prismaClient = new client_1.PrismaClient();
