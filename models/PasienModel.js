import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import OrangTua from "./OrangTuaModel.js";

const { DataTypes } = Sequelize;

const Pasien = db.define('pasien', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3,100],
        }
    },
    date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    gender: {
        type: DataTypes.ENUM('P','L'),
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
}, {
    freezeTableName: true,
});

OrangTua.hasMany(Pasien, {as: 'anak'});
Pasien.belongsTo(OrangTua);

export default Pasien;