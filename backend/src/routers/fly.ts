import { Router } from "express";
import {
  getAllFly,
  getCurrentFly,
  createNewFly,
  deleteCurrentFly,
  updateCurrentFly,
} from "../controllers/fly";

const router = Router();

router.get("/", getAllFly);
router.get("/:id", getCurrentFly);
router.post("/", createNewFly);
router.delete("/:id", deleteCurrentFly);
router.put("/:id", updateCurrentFly);

export default router;
