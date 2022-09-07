import { Request, Response } from 'express';
import {PostComment} from '../models/PostComment';

export const getPostComments = (req: Request, res: Response) => {
    res.json({
        msg:'getPostComment'
    })
}

export const getPostComment = (req: Request, res: Response) => {
    res.json({
        msg:'getPostComment'
    })
}

export const postPostComment = async (req: Request, res: Response) => {
    
    const { body } = req;

    try {
        


        const postComment = new PostComment(body);
        await postComment.save();

        res.json( postComment );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }
}

export const putPostComment = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg:'putPostComment',
        body
    })
}

export const deletePostComment = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg:'deletePostComment',
        id
    })
}