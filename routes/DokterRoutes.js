import express from "express";
import {
  getDokter,
  getDokterById,
  createDokter,
  updateDokter,
  deleteDokter
} from "../controllers/Dokter.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/dokter", verifyUser, getDokter);
router.get("/dokter/:id", verifyUser, getDokterById);
router.post("/dokter", verifyUser, createDokter);
router.patch("/dokter/:id", verifyUser, updateDokter);
router.delete("/dokter/:id", verifyUser, deleteDokter);

export default router;