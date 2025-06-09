import express from "express";
import {
  getRekamMedis,
  getRekamMedisById,
  createRekamMedis,
  updateRekamMedis,
  deleteRekamMedis
} from "../controllers/RekamMedis.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/rekam-medis", verifyUser, getRekamMedis);
router.get("/rekam-medis/:id", verifyUser, getRekamMedisById);
router.post("/rekam-medis", verifyUser, createRekamMedis);
router.patch("/rekam-medis/:id", verifyUser, updateRekamMedis);
router.delete("/rekam-medis/:id", verifyUser, deleteRekamMedis);

export default router;