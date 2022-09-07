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
const Post_1 = require("../models/Post");
exports.getPosts = (req, res) => {
    res.json({
        msg: 'getPost'
    });
};
exports.getPost = (req, res) => {
    res.json({
        msg: 'getPost'
    });
};
exports.postPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { body } = req;
    try {
        const post = new Post_1.Post(body);
        yield post.save();
        res.json(post);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putPost = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putPost',
        body
    });
};
exports.deletePost = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deletePost',
        id
    });
};
//# sourceMappingURL=post.js.map