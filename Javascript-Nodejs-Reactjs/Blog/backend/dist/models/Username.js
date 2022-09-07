"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
class Username extends sequelize_1.Model {
}
exports.Username = Username;
Username.init({
    fullname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    userType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    passwordHash: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    profile: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    intro: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    lastLogin: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: "Username",
    timestamps: true,
    sequelize: connection_1.db,
});
Username.sync({ alter: true });
//# sourceMappingURL=Username.js.map