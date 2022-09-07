"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
const Post_1 = require("./Post");
class Category extends sequelize_1.Model {
}
exports.Category = Category;
Category.init({
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
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: 'Category',
    timestamps: true,
    // Conexion
    sequelize: connection_1.db,
    paranoid: true
});
class PostCategory extends sequelize_1.Model {
}
exports.PostCategory = PostCategory;
Post_1.Post.belongsToMany(Category, { through: 'PostCategory' });
Category.belongsToMany(Post_1.Post, { through: 'PostCategory' });
PostCategory.init({
    postId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        references: {
            model: Post_1.Post,
            key: 'id'
        }
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        references: {
            model: Category,
            key: 'id'
        }
    }
}, {
    tableName: 'PostCategory',
    timestamps: false,
    sequelize: connection_1.db
});
Category.sync({ alter: true });
PostCategory.sync({ alter: true });
//# sourceMappingURL=Category.js.map