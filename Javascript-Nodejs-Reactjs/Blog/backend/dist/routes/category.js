"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_1 = require("../controllers/category");
const router = express_1.Router();
// Post routes
router.get('/category/', category_1.getAllCategory);
router.get('/category/:id', category_1.getCategory);
router.post('/category/', category_1.postCategory);
router.put('/category/:id', category_1.putCategory);
router.delete('/category/:id', category_1.deleteCategory);
// Post comment routes
router.get('/category/post/', category_1.getAllPostCategory);
router.get('/category/post/:id', category_1.getPostCategory);
router.post('/category/post/', category_1.postPostCategory);
router.put('/category/post/:id', category_1.putPostCategory);
router.delete('/category/post/:id', category_1.deletePostCategory);
exports.default = router;
//# sourceMappingURL=category.js.map