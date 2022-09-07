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
const Tag_1 = require("../models/Tag");
exports.getAllTag = (req, res) => {
    res.json({
        msg: 'getPost'
    });
};
exports.getTag = (req, res) => {
    res.json({
        msg: 'getPost'
    });
};
exports.postTag = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { body } = req;
    try {
        const tag = new Tag_1.Tag(body);
        yield tag.save();
        res.json(tag);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTag = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putPost',
        body
    });
};
exports.deleteTag = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deletePost',
        id
    });
};
exports.getAllPostTag = (req, res) => {
    res.json({
        msg: 'getPost'
    });
};
exports.getPostTag = (req, res) => {
    res.json({
        msg: 'getPost'
    });
};
exports.postPostTag = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { body } = req;
    try {
        const postTag = new Tag_1.PostTag(body);
        yield postTag.save();
        res.json(postTag);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putPostTag = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putPost',
        body
    });
};
exports.deletePostTag = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deletePost',
        id
    });
};
//# sourceMappingURL=tag.js.map