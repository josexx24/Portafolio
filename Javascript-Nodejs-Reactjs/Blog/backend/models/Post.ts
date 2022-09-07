import {DataTypes, Model, Optional} from 'sequelize';
import {db} from '../db/connection';

interface PostAttributes {
    id:number;
    title: string;
    metatitle:string;
    slug: string;
    summary: Text;
    isPublished: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
    content:Text;
}
export interface PostInput extends Optional<PostAttributes, 'id' | 'slug'> {}
export interface PostOuput extends Required<PostAttributes> {}

export class Post extends Model<PostAttributes,PostInput> implements PostAttributes{
    public id!: number;
    public title!: string;
    public metatitle!: string;
    public slug!:string;
    public summary!: Text;
    public isPublished!:boolean;
    public content!:Text;

    // TimeStamps
    public readonly createdAt!:Date;
    public readonly updatedAt!:Date;
    public readonly publishedAt!:Date;

}

Post.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    metatitle:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    slug:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    summary:{
        type:DataTypes.TEXT,
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
    tableName:"Post",
    timestamps:true,
    // Conexion
    sequelize:db,
    paranoid:true
});

Post.sync({alter:false})





