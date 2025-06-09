import RekamMedis from "../models/RekamMedisModel.js";

export const getRekamMedis = async (req, res) => {
  try {
    const response = await RekamMedis.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getRekamMedisById = async (req, res) => {
  try {
    const rekam = await RekamMedis.findOne({ where: { id_rekam_medis: req.params.id } });
    if (!rekam) return res.status(404).json({ msg: "Rekam medis tidak ditemukan!" });
    res.status(200).json(rekam);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createRekamMedis = async (req, res) => {
  try {
    await RekamMedis.create(req.body);
    res.status(201).json({ msg: "Rekam medis berhasil dibuat!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateRekamMedis = async (req, res) => {
  try {
    const rekam = await RekamMedis.findOne({ where: { id_rekam_medis: req.params.id } });
    if (!rekam) return res.status(404).json({ msg: "Rekam medis tidak ditemukan!" });
    await RekamMedis.update(req.body, { where: { id_rekam_medis: req.params.id } });
    res.status(200).json({ msg: "Rekam medis berhasil diupdate!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteRekamMedis = async (req, res) => {
  try {
    const rekam = await RekamMedis.findOne({ where: { id_rekam_medis: req.params.id } });
    if (!rekam) return res.status(404).json({ msg: "Rekam medis tidak ditemukan!" });
    await RekamMedis.destroy({ where: { id_rekam_medis: req.params.id } });
    res.status(200).json({ msg: "Rekam medis berhasil dihapus!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};