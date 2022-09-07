import { Request, Response } from 'express';
import {Post} from '../models/Post';

export const getPosts = (req: Request, res: Response) => {
    res.json({
        msg:'getPost'
    })
}

export const getPost = (req: Request, res: Response) => {
    res.json({
        msg:'getPost'
    })
}

export const postPost = async (req: Request, res: Response) => {
    
    const { body } = req;

    try {
        


        const post = new Post(body);
        await post.save();

        res.json( post );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }
}

export const putPost = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg:'putPost',
        body
    })
}

export const deletePost = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg:'deletePost',
        id
    })
}