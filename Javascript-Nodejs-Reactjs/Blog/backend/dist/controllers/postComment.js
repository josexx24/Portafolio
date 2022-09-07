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
const PostComment_1 = require("../models/PostComment");
exports.getPostComments = (req, res) => {
    res.json({
        msg: 'getPostComment'
    });
};
exports.getPostComment = (req, res) => {
    res.json({
        msg: 'getPostComment'
    });
};
exports.postPostComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { body } = req;
    try {
        const postComment = new PostComment_1.PostComment(body);
        yield postComment.save();
        res.json(postComment);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putPostComment = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putPostComment',
        body
    });
};
exports.deletePostComment = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deletePostComment',
        id
    });
};
//# sourceMappingURL=postComment.js.map