import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const PelayananKesehatan = db.define('pelayanan_kesehatan', {
  id_pelayanan: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama_pelayanan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deskripsi: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  harga: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

export default PelayananKesehatan;