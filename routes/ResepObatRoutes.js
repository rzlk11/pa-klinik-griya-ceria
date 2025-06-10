import express from "express";
import {
  getResepObat,
  getResepObatById,
  createResepObat,
  updateResepObat,
  deleteResepObat
} from "../controllers/ResepObat.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/resep-obat", verifyUser, getResepObat);
router.get("/resep-obat/:id", verifyUser, getResepObatById);
router.post("/resep-obat", verifyUser, createResepObat);
router.patch("/resep-obat/:id", verifyUser, updateResepObat);
router.delete("/resep-obat/:id", verifyUser, deleteResepObat);

export default router;