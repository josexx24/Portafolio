import { Router } from "express";
import { postTag,getTag,getAllTag,putTag,deleteTag,
        postPostTag, getPostTag, getAllPostTag , putPostTag, deletePostTag } from "../controllers/tag";
const router = Router();
// Post routes
router.get('/', getAllTag);
router.get('/:id',getTag);
router.post('/', postTag);
router.put('/:id', putTag);
router.delete('/:id', deleteTag);
// Post comment routes
router.get('/post/', getAllPostTag);
router.get('/post/:id',getPostTag);
router.post('/post/', postPostTag);
router.put('/post/:id', putPostTag);
router.delete('/post/:id', deletePostTag);


export default router;