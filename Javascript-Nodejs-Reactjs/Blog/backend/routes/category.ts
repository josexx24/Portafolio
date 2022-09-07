import { Router } from "express";
import { postCategory,getCategory,getAllCategory,putCategory,deleteCategory,
        postPostCategory, getPostCategory, getAllPostCategory , putPostCategory, deletePostCategory } from "../controllers/category";
const router = Router();
// Post routes
router.get('/', getAllCategory);
router.get('/:id',getCategory);
router.post('/', postCategory);
router.put('/:id', putCategory);
router.delete('/:id', deleteCategory);
// Post comment routes
router.get('/post/', getAllPostCategory);
router.get('/post/:id',getPostCategory);
router.post('/post/', postPostCategory);
router.put('/post/:id', putPostCategory);
router.delete('/post/:id', deletePostCategory);


export default router;