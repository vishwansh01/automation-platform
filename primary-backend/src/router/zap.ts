import { Router } from "express";
import { authMiddleware } from "../middleware";

const router = Router();

router.post("/", authMiddleware, (req, res) => {
  console.log("create");
});

router.get("/", authMiddleware, (req, res) => {
  console.log("zap handler");
});
router.get("/:zapId", authMiddleware, (req, res) => {
  console.log(" handler");
});

export const zapRouter = router;
