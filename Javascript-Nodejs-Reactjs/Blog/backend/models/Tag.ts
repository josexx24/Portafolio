
import {DataTypes,ForeignKey, Model, Optional} from 'sequelize';
import {db} from '../db/connection';
import {Post} from './Post';

interface TagAttributes {
    id:number;
    title:string;
    metatitle:string;
    slug: string;
    content:Text;
}

export interface TagInput extends Optional<TagAttributes, 'id'> {}
export interface TagOuput extends Required<TagAttributes> {}


export class Tag extends Model<TagAttributes,TagInput> implements TagAttributes{
    public id!: number;
    public title!: string;
    public metatitle!: string;
    public slug!: string;
    public content!: Text;
}

Tag.init({
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
    timestamps:true,
    // Conexion
    sequelize:db,
    paranoid:true
});

interface PostTagKeys{
    postId: ForeignKey<number>;
    tagId:ForeignKey<number>;
}

export class PostTag extends Model<PostTagKeys> implements PostTagKeys{
    public postId!: ForeignKey<number>;
    public tagId!: ForeignKey<number>;
}


Post.belongsToMany(Tag, { through: 'PostTag' });
Tag.belongsToMany(Post, { through: 'PostTag' });    

PostTag.init({
    postId:{
        type:DataTypes.INTEGER.UNSIGNED,
        references:{
            model:Post,
            key:'id'
        }
    },
    tagId:{
        type:DataTypes.INTEGER.UNSIGNED,
        references:{
            model:Tag,
            key:'id'
        }
    }

},{ 
    tableName:'PostTag',
    timestamps:false,
    sequelize: db
})

Tag.sync({alter:true});
PostTag.sync({alter:true});