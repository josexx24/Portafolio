"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("../controllers/post");
const postComment_1 = require("../controllers/postComment");
const router = express_1.Router();
// Post routes
router.get('/post/', post_1.getPosts);
router.get('/post/:id', post_1.getPost);
router.post('/post/', post_1.postPost);
router.put('/post/:id', post_1.putPost);
router.delete('/post/:id', post_1.deletePost);
// Post comment routes
router.get('/post/comment/', postComment_1.getPostComments);
router.get('/post/comment/:id', postComment_1.getPostComment);
router.post('/post/comment/', postComment_1.postPostComment);
router.put('/post/comment/:id', postComment_1.putPostComment);
router.delete('/post/comment/:id', postComment_1.deletePostComment);
exports.default = router;
//# sourceMappingURL=post.js.map