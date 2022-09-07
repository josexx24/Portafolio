"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const username_1 = require("../controllers/username");
const router = express_1.Router();
router.get('/', username_1.getUsernames);
router.get('/:id', username_1.getUsername);
router.post("/", username_1.postUsername);
router.put("/:id", username_1.putUsername);
router.delete("/:id", username_1.deleteUsername);
exports.default = router;
//# sourceMappingURL=username.js.map