import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const RekamMedis = db.define('rekam_medis', {
  id_rekam_medis: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_pasien: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_dokter: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_pelayanan: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  diagnosa: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  tindakan: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  catatan: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  freezeTableName: true,
});

export default RekamMedis;