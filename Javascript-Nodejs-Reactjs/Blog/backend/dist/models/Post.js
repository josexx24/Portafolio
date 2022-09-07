"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
class Post extends sequelize_1.Model {
}
exports.Post = Post;
Post.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    metatitle: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    summary: {
        type: sequelize_1.DataTypes.TEXT,
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
    tableName: "Post",
    timestamps: true,
    // Conexion
    sequelize: connection_1.db,
    paranoid: true
});
Post.sync({ alter: false });
//# sourceMappingURL=Post.js.map