"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
class PostComment extends sequelize_1.Model {
}
exports.PostComment = PostComment;
PostComment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isPublished: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    publishedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: 'PostComment',
    timestamps: true,
    // Conexion
    sequelize: connection_1.db,
    paranoid: true
});
PostComment.sync({ alter: true });
//# sourceMappingURL=PostComment.js.map