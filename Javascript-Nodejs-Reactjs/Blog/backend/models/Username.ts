import {DataTypes, Model, Optional} from 'sequelize';
import {db} from '../db/connection';

interface UsernameAtrributes{
    fullname: string;
    email: string;
    userType:string;
    username:string;
    passwordHash: string;
    createdAt?:Date;
    updatedAt?:Date;
    lastLogin?:Date;
    profile:Text;
    intro:Text;
}
export interface UsernameInput extends Optional<UsernameAtrributes, 'email'> {}
export interface UsernameOuput extends Required<UsernameAtrributes> {}


export class Username extends Model<UsernameAtrributes, UsernameInput> implements UsernameAtrributes{
    public fullname!: string;
    public email!: string;
    public userType!:string;
    public username!:string;
    public passwordHash!: string;
    public profile!:Text;
    public intro!:Text;
    //Date 
    public createdAt!:Date;
    public updatedAt!:Date;
    public lastLogin!:Date;
    
}

Username.init({
    fullname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        primaryKey:true,
        allowNull:false
    },
    userType:{
        type:DataTypes.STRING,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    passwordHash:{
        type:DataTypes.STRING,
        allowNull:false
    },
    profile:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    intro:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    lastLogin:{
        type:DataTypes.DATE,
        allowNull:true
    }
},{
    tableName:"Username",
    timestamps:true,
    sequelize: db,
})

Username.sync({alter:true});