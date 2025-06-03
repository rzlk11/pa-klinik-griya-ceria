import { Sequelize } from "sequelize";

const db = new Sequelize('klinik_griya_ceria', 'postgres', 'root', {
    host: 'localhost',
    dialect: "postgres"
}
  
);

export default db;
