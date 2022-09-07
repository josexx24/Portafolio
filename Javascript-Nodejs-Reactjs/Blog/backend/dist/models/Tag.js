"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
const Post_1 = require("./Post");
class Tag extends sequelize_1.Model {
}
exports.Tag = Tag;
Tag.init({
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
    timestamps: true,
    // Conexion
    sequelize: connection_1.db,
    paranoid: true
});
class PostTag extends sequelize_1.Model {
}
exports.PostTag = PostTag;
Post_1.Post.belongsToMany(Tag, { through: 'PostTag' });
Tag.belongsToMany(Post_1.Post, { through: 'PostTag' });
PostTag.init({
    postId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        references: {
            model: Post_1.Post,
            key: 'id'
        }
    },
    tagId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        references: {
            model: Tag,
            key: 'id'
        }
    }
}, {
    tableName: 'PostTag',
    timestamps: false,
    sequelize: connection_1.db
});
Tag.sync({ alter: true });
PostTag.sync({ alter: true });
//# sourceMappingURL=Tag.js.map