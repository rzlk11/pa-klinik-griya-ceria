import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const DetailResepObat = db.define('detail_resep_obat', {
  id_detail_resep: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_resep: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_obat: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dosis: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jumlah_obat: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  aturan_pakai: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  catatan_dokter: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  freezeTableName: true,
});

export default DetailResepObat;