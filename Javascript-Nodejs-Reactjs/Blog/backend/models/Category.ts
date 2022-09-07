
import {DataTypes, ForeignKey, Model, Optional} from 'sequelize';
import {db} from '../db/connection';
import {Post} from './Post';

interface CategoryAttributes{
    id:number;
    title:string;
    metatitle:string;
    slug: string;
    content:Text;
}

export interface CategoryInput extends Optional<CategoryAttributes, 'id'> {}
export interface CategoryOuput extends Required<CategoryAttributes> {}

export class Category extends Model<CategoryAttributes,CategoryInput> implements CategoryAttributes{
    public id!: number;
    public title!: string;
    public metatitle!: string;
    public slug!:string;
    public content!:Text;

}

Category.init({
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
    content:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
},{
    tableName:'Category',
    timestamps:true,
    // Conexion
    sequelize:db,
    paranoid:true
});

interface PostCategoryKeys{
    postId: ForeignKey<number>;
    categoryId:ForeignKey<number>;
}

export class PostCategory extends Model<PostCategoryKeys> implements PostCategoryKeys{
    public postId!: ForeignKey<number>;
    public categoryId!: ForeignKey<number>;
}


Post.belongsToMany(Category, { through: 'PostCategory' });
Category.belongsToMany(Post, { through: 'PostCategory' });    

PostCategory.init({
    postId:{
        type:DataTypes.INTEGER.UNSIGNED,
        references:{
            model:Post,
            key:'id'
        }
    },
    categoryId:{
        type:DataTypes.INTEGER.UNSIGNED,
        references:{
            model:Category,
            key:'id'
        }
    }
},{ 
        tableName:'PostCategory',
        timestamps:false,
        sequelize: db
});

Category.sync({alter:true})
PostCategory.sync({alter:true})