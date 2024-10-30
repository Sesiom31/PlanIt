import { router as authRouter } from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/auth", authRouter);
