import { Request, Response } from 'express';
import {Category, PostCategory} from '../models/Category';

export const getAllCategory = (req: Request, res: Response) => {
    res.json({
        msg:'getPost'
    })
}

export const getCategory = (req: Request, res: Response) => {
    res.json({
        msg:'getPost'
    })
}

export const postCategory = async (req: Request, res: Response) => {
    
    const { body } = req;

    try {
        


        const category = new Category(body);
        await category.save();

        res.json( category );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }
}

export const putCategory = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg:'putPost',
        body
    })
}

export const deleteCategory = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg:'deletePost',
        id
    })
}

export const getAllPostCategory = (req: Request, res: Response) => {
    res.json({
        msg:'getPost'
    })
}

export const getPostCategory = (req: Request, res: Response) => {
    res.json({
        msg:'getPost'
    })
}

export const postPostCategory = async (req: Request, res: Response) => {
    
    const { body } = req;

    try {
        


        const postCategory = new PostCategory(body);
        await postCategory.save();

        res.json( postCategory );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }
}

export const putPostCategory = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg:'putPost',
        body
    })
}

export const deletePostCategory = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg:'deletePost',
        id
    })
}