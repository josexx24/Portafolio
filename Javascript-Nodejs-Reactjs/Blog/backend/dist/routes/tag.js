"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tag_1 = require("../controllers/tag");
const router = express_1.Router();
// Post routes
router.get('/tag/', tag_1.getAllTag);
router.get('/tag/:id', tag_1.getTag);
router.post('/tag/', tag_1.postTag);
router.put('/tag/:id', tag_1.putTag);
router.delete('/tag/:id', tag_1.deleteTag);
// Post comment routes
router.get('/tag/post/', tag_1.getAllPostTag);
router.get('/tag/post/:id', tag_1.getPostTag);
router.post('/tag/post/', tag_1.postPostTag);
router.put('/tag/post/:id', tag_1.putPostTag);
router.delete('/tag/post/:id', tag_1.deletePostTag);
exports.default = router;
//# sourceMappingURL=tag.js.map