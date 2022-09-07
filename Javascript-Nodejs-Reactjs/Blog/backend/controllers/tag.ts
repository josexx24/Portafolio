import { Request, Response } from 'express';
import {Tag, PostTag} from '../models/Tag';

export const getAllTag = (req: Request, res: Response) => {
    res.json({
        msg:'getPost'
    })
}

export const getTag = (req: Request, res: Response) => {
    res.json({
        msg:'getPost'
    })
}

export const postTag = async (req: Request, res: Response) => {
    
    const { body } = req;

    try {
        


        const tag = new Tag(body);
        await tag.save();

        res.json( tag );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }
}

export const putTag = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg:'putPost',
        body
    })
}

export const deleteTag = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg:'deletePost',
        id
    })
}

export const getAllPostTag = (req: Request, res: Response) => {
    res.json({
        msg:'getPost'
    })
}

export const getPostTag = (req: Request, res: Response) => {
    res.json({
        msg:'getPost'
    })
}

export const postPostTag = async (req: Request, res: Response) => {
    
    const { body } = req;

    try {
        


        const postTag = new PostTag(body);
        await postTag.save();

        res.json( postTag );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }
}

export const putPostTag = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg:'putPost',
        body
    })
}

export const deletePostTag = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg:'deletePost',
        id
    })
}