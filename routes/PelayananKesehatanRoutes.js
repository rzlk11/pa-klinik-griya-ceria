import express from "express";
import {
  getPelayanan,
  getPelayananById,
  createPelayanan,
  updatePelayanan,
  deletePelayanan
} from "../controllers/PelayananKesehatan.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/pelayanan", verifyUser, getPelayanan);
router.get("/pelayanan/:id", verifyUser, getPelayananById);
router.post("/pelayanan", verifyUser, createPelayanan);
router.patch("/pelayanan/:id", verifyUser, updatePelayanan);
router.delete("/pelayanan/:id", verifyUser, deletePelayanan);

export default router;