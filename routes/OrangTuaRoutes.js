import express from "express";
import {
    getOrangTua,
    getOrangTuaById,
    createOrangTua,
    updateOrangTua,
    deleteOrangTua
} from '../controllers/OrangTua.js'
import { verifyUser } from '../middleware/AuthUser.js'

const router = express.Router();

router.get('/orangtua', verifyUser, getOrangTua);
router.get('/orangtua/:id', verifyUser, getOrangTuaById);
router.post('/orangtua', verifyUser, createOrangTua);
router.patch('/orangtua/:id', verifyUser, updateOrangTua);
router.delete('/orangtua/:id', verifyUser, deleteOrangTua);

export default router;