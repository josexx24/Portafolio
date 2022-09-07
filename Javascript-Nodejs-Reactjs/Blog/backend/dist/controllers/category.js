"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("../models/Category");
exports.getAllCategory = (req, res) => {
    res.json({
        msg: 'getPost'
    });
};
exports.getCategory = (req, res) => {
    res.json({
        msg: 'getPost'
    });
};
exports.postCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { body } = req;
    try {
        const category = new Category_1.Category(body);
        yield category.save();
        res.json(category);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putCategory = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putPost',
        body
    });
};
exports.deleteCategory = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deletePost',
        id
    });
};
exports.getAllPostCategory = (req, res) => {
    res.json({
        msg: 'getPost'
    });
};
exports.getPostCategory = (req, res) => {
    res.json({
        msg: 'getPost'
    });
};
exports.postPostCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { body } = req;
    try {
        const postCategory = new Category_1.PostCategory(body);
        yield postCategory.save();
        res.json(postCategory);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putPostCategory = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putPost',
        body
    });
};
exports.deletePostCategory = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deletePost',
        id
    });
};
//# sourceMappingURL=category.js.map