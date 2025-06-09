import Obat from "../models/ObatModel.js";

export const getObat = async (req, res) => {
  try {
    const response = await Obat.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getObatById = async (req, res) => {
  try {
    const obat = await Obat.findOne({ where: { id_obat: req.params.id } });
    if (!obat) return res.status(404).json({ msg: "Obat tidak ditemukan!" });
    res.status(200).json(obat);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createObat = async (req, res) => {
  try {
    await Obat.create(req.body);
    res.status(201).json({ msg: "Obat berhasil dibuat!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateObat = async (req, res) => {
  try {
    const obat = await Obat.findOne({ where: { id_obat: req.params.id } });
    if (!obat) return res.status(404).json({ msg: "Obat tidak ditemukan!" });
    await Obat.update(req.body, { where: { id_obat: req.params.id } });
    res.status(200).json({ msg: "Obat berhasil diupdate!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteObat = async (req, res) => {
  try {
    const obat = await Obat.findOne({ where: { id_obat: req.params.id } });
    if (!obat) return res.status(404).json({ msg: "Obat tidak ditemukan!" });
    await Obat.destroy({ where: { id_obat: req.params.id } });
    res.status(200).json({ msg: "Obat berhasil dihapus!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};