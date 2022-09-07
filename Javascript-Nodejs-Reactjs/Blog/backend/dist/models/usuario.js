"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('sqlite::memory');
const Usuario = sequelize.define('Usuario', {
    fullname: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING,
    username: sequelize_1.DataTypes.STRING,
    passwordHash: sequelize_1.DataTypes.STRING,
    registeredAt: sequelize_1.DataTypes.DATE,
    lastLogin: sequelize_1.DataTypes.DATE,
    profile: sequelize_1.DataTypes.TEXT,
    intro: sequelize_1.DataTypes.TEXT
});
//# sourceMappingURL=usuario.js.map