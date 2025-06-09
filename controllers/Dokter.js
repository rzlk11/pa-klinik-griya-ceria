import Dokter from "../models/DokterModel.js";

export const getDokter = async (req, res) => {
  try {
    const response = await Dokter.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getDokterById = async (req, res) => {
  try {
    const dokter = await Dokter.findOne({
      where: { id_dokter: req.params.id },
    });
    if (!dokter)
      return res.status(404).json({ msg: "Dokter tidak ditemukan!" });
    res.status(200).json(dokter);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createDokter = async (req, res) => {
  try {
    await Dokter.create(req.body);
    res.status(201).json({ msg: "Dokter berhasil dibuat!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateDokter = async (req, res) => {
  try {
    const dokter = await Dokter.findOne({
      where: { id_dokter: req.params.id },
    });
    if (!dokter)
      return res.status(404).json({ msg: "Dokter tidak ditemukan!" });
    await Dokter.update(req.body, { where: { id_dokter: req.params.id } });
    res.status(200).json({ msg: "Dokter berhasil diupdate!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteDokter = async (req, res) => {
  try {
    const dokter = await Dokter.findOne({
      where: { id_dokter: req.params.id },
    });
    if (!dokter)
      return res.status(404).json({ msg: "Dokter tidak ditemukan!" });
    await Dokter.destroy({ where: { id_dokter: req.params.id } });
    res.status(200).json({ msg: "Dokter berhasil dihapus!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
