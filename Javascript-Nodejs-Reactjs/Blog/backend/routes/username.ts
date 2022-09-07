import { Router } from 'express';
import { deleteUsername, getUsername, getUsernames, postUsername, putUsername } from '../controllers/username';

const router = Router();

router.get('/', getUsernames);
router.get('/:id', getUsername);
router.post("/", postUsername);
router.put("/:id", putUsername);
router.delete("/:id", deleteUsername);


export default router;