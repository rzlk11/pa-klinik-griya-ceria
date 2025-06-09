import Transaksi from "../models/TransaksiModel.js";
import Pasien from "../models/PasienModel.js";
import PelayananKesehatan from "../models/PelayananKesehatanModel.js";
import ResepObat from "../models/ResepObatModel.js";

export const getTransaksi = async (req, res) => {
  try {
    const response = await Transaksi.findAll({
      include: [
        { model: Pasien, as: "pasien" },
        { model: PelayananKesehatan, as: "pelayanan" },
        { model: ResepObat, as: "resep" }
      ]
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getTransaksiById = async (req, res) => {
  try {
    const transaksi = await Transaksi.findOne({
      where: { id_transaksi: req.params.id },
      include: [
        { model: Pasien, as: "pasien" },
        { model: PelayananKesehatan, as: "pelayanan" },
        { model: ResepObat, as: "resep" }
      ]
    });
    if (!transaksi) return res.status(404).json({ msg: "Transaksi tidak ditemukan!" });
    res.status(200).json(transaksi);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createTransaksi = async (req, res) => {
  try {
    await Transaksi.create(req.body);
    res.status(201).json({ msg: "Transaksi berhasil dibuat!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findOne({ where: { id_transaksi: req.params.id } });
    if (!transaksi) return res.status(404).json({ msg: "Transaksi tidak ditemukan!" });
    await Transaksi.update(req.body, { where: { id_transaksi: req.params.id } });
    res.status(200).json({ msg: "Transaksi berhasil diupdate!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findOne({ where: { id_transaksi: req.params.id } });
    if (!transaksi) return res.status(404).json({ msg: "Transaksi tidak ditemukan!" });
    await Transaksi.destroy({ where: { id_transaksi: req.params.id } });
    res.status(200).json({ msg: "Transaksi berhasil dihapus!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};