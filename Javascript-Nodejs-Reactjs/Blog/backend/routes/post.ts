import { Router } from "express";
import { postPost,getPost,getPosts,putPost,deletePost } from "../controllers/post";
import { postPostComment, getPostComment,getPostComments, putPostComment,deletePostComment } from "../controllers/postComment";
const router = Router();
// Post routes
router.get('/', getPosts);
router.get('/:id',getPost);
router.post('/', postPost);
router.put('/:id', putPost);
router.delete('/:id', deletePost);
// Post comment routes
router.get('/comment/', getPostComments);
router.get('/comment/:id',getPostComment);
router.post('/comment/', postPostComment);
router.put('/comment/:id', putPostComment);
router.delete('/comment/:id', deletePostComment);


export default router;