import express from "express";
import {
    getPasien,
    getPasienById,
    createPasien,
    updatePasien,
    deletePasien
} from '../controllers/Pasien.js'
import { verifyUser } from '../middleware/AuthUser.js'

const router = express.Router();

router.get('/pasien', verifyUser, getPasien);
router.get('/pasien/:id', verifyUser, getPasienById);
router.post('/pasien', verifyUser, createPasien);
router.patch('/pasien/:id', verifyUser, updatePasien);
router.delete('/pasien/:id', verifyUser, deletePasien);

export default router;