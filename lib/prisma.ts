// lib/prisma.ts
//this way we use 1 instance of prisma client throughout the app
import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient();
export default prisma;
