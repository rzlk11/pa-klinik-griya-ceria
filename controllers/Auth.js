import Users from "../models/UserModel.js";
import argon from 'argon2';

export const Login = async (req, res) => {
    const user = await Users.findOne({
        where: {
            email: req.body.email
        }
    });
    if(!user) return res.status(404).json({msg:"User tidak ditemukan!"});
    const match = await argon.verify(user.password, req.body.password);
    if(!match) return res.status(400).json({msg: "Password salah!"});
    req.session.userId = user.uuid;
    const uuid = user.uuid;
    const name = user.name;
    const email = user.email;
    res.status(200).json({uuid, name, email});
}

export const Me = async (req, res) => {
    if(!req.session.userId) {
        return res.status(401).json({msg: "Mohon login ke akun anda!"});
    }
    const user = await Users.findOne({
        attributes: ['uuid', 'name', 'email'],
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan!"});
    res.status(200).json(user);
}

export const LogOut = async (req, res) => {
    req.session.destroy((err) => {
        if(err) return res.status(400).json({msg: "Tidak dapat logout!"});
        res.status(200).json({msg: "Anda telah logout!"});
    })
}