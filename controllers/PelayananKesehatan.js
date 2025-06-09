import PelayananKesehatan from "../models/PelayananKesehatanModel.js";

export const getPelayanan = async (req, res) => {
  try {
    const response = await PelayananKesehatan.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getPelayananById = async (req, res) => {
  try {
    const pelayanan = await PelayananKesehatan.findOne({
      where: { id_pelayanan: req.params.id },
    });
    if (!pelayanan)
      return res.status(404).json({ msg: "Pelayanan tidak ditemukan!" });
    res.status(200).json(pelayanan);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createPelayanan = async (req, res) => {
  try {
    await PelayananKesehatan.create(req.body);
    res.status(201).json({ msg: "Pelayanan berhasil dibuat!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updatePelayanan = async (req, res) => {
  try {
    const pelayanan = await PelayananKesehatan.findOne({
      where: { id_pelayanan: req.params.id },
    });
    if (!pelayanan)
      return res.status(404).json({ msg: "Pelayanan tidak ditemukan!" });
    await PelayananKesehatan.update(req.body, {
      where: { id_pelayanan: req.params.id },
    });
    res.status(200).json({ msg: "Pelayanan berhasil diupdate!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deletePelayanan = async (req, res) => {
  try {
    const pelayanan = await PelayananKesehatan.findOne({
      where: { id_pelayanan: req.params.id },
    });
    if (!pelayanan)
      return res.status(404).json({ msg: "Pelayanan tidak ditemukan!" });
    await PelayananKesehatan.destroy({
      where: { id_pelayanan: req.params.id },
    });
    res.status(200).json({ msg: "Pelayanan berhasil dihapus!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
