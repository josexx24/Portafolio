import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import {Username} from '../models/Username';

export const getUsernames = async(req: Request, res: Response) => {
    const usuarios =  await Username.findAll();
    res.json(
        {usuarios}
    )
}

export const getUsername = async(req: Request, res: Response) => {
    const { id } = req.params;

    const usuario = await Username.findByPk( id );

    if( usuario ) {
        res.json(usuario);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${ id }`
        });
    }

}

export const postUsername = async (req: Request, res: Response) => {
    
    console.log("Entramos a post")
    const { body } = req;

    try {
        
        const existeEmail = await Username.findOne({
            where: {
                email: body.email
            }
        });

        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            });
        }


        const usuario = new Username(body);
        await usuario.save();

        res.json( usuario );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }
}

export const putUsername = async(req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        
        const usuario = await Username.findByPk( id );
        if ( !usuario ) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }

        await usuario.update( body );

        res.json( usuario );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }   
}

export const deleteUsername = async(req: Request, res: Response) => {
    const { id } = req.params;

    const usuario = await Username.findByPk( id );
    if ( !usuario ) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }

    await usuario.destroy();


    res.json(usuario);
}