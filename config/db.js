import { Sequelize } from "sequelize";
import UserModel from '../Model/UserModel.js'

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {
    sequelize: sequelize,
};

db.User = UserModel(sequelize, Sequelize);

console.log("db:", db);
console.log("db.User:", db?.User);

export default db;