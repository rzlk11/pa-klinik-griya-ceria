import Pasien from "../models/PasienModel.js";
import OrangTua from "../models/OrangTuaModel.js";

export const getOrangTua = async (req, res) => {
  try {
    const response = await OrangTua.findAll({
      attributes: ["id", "uuid", "name", "relation", "phone"],
      include: {
        model: Pasien,
        as: "anak",
        required: false,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getOrangTuaById = async (req, res) => {
  try {
    const orangtua = await OrangTua.findOne({
      where: {
        uuid: req.params.id,
      },
      include: {
        model: Pasien,
        as: "anak",
        required: false,
      },
    });
    if (!orangtua)
      return res.status(404).json({ msg: "Data Orang Tua tidak ditemukan!" });
    res.status(200).json(orangtua);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const createOrangTua = async (req, res) => {
  const { name, relation, phone } = req.body;
  try {
    await OrangTua.create({
      name: name,
      relation: relation,
      phone: phone,
    });
    res.status(201).json({ msg: "Data Orang Tua berhasil dibuat!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateOrangTua = async (req, res) => {
  const { name, relation, phone } = req.body;

  const pasien = await OrangTua.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!pasien)
    return res.status(404).json({ msg: "Data Orang Tua tidak ditemukan!" });

  try {
    await OrangTua.update(
      {
        name: name,
        relation: relation,
        phone: phone,
      },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Data Orang Tua berhasil diupdate!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteOrangTua = async (req, res) => {
  const pasien = await OrangTua.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!pasien)
    return res.status(404).json({ msg: "Data Orang Tua tidak ditemukan!" });
  try {
    await OrangTua.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data Orang Tua berhasil dihapus!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
