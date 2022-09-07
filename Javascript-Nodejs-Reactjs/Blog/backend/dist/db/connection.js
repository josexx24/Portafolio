"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize('blog_ts', 'jo24', 'Majora-20', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});
//# sourceMappingURL=connection.js.map