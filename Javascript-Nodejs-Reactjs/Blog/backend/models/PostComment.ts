import {DataTypes, Model, Optional} from 'sequelize';
import {db} from '../db/connection';

interface PostCommentAttributes{
    id:number;
    title:string;
    isPublished:boolean;
    publishedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    content: Text;
}

export interface PostCommentInput extends Optional<PostCommentAttributes, 'id'> {}
export interface PostCommentOuput extends Required<PostCommentAttributes> {}

export class PostComment extends Model<PostCommentAttributes,PostCommentInput> implements PostCommentAttributes{
    public id!: number;
    public title!: string;
    public isPublished!: boolean;
    public content!:Text;

    // TimeStamps
    public readonly createdAt!:Date;
    public readonly updatedAt!:Date;
    public readonly publishedAt!:Date;

}

PostComment.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    isPublished:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
    },
    publishedAt:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
},{
    tableName:'PostComment',
    timestamps:true,
    // Conexion
    sequelize:db,
    paranoid:true
});

PostComment.sync({alter:true});