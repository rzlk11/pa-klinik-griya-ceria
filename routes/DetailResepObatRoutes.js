import express from "express";
import {
  getDetailResepObat,
  getDetailResepObatById,
  createDetailResepObat,
  updateDetailResepObat,
  deleteDetailResepObat
} from "../controllers/DetailResepObat.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/detail-resep-obat", verifyUser, getDetailResepObat);
router.get("/detail-resep-obat/:id", verifyUser, getDetailResepObatById);
router.post("/detail-resep-obat", verifyUser, createDetailResepObat);
router.patch("/detail-resep-obat/:id", verifyUser, updateDetailResepObat);
router.delete("/detail-resep-obat/:id", verifyUser, deleteDetailResepObat);

export default router;