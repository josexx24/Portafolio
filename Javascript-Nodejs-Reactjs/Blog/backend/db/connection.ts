import {Sequelize} from 'sequelize';




export const db = new Sequelize('blog_ts','jo24','Majora-20',{
    host:'localhost',
    port:3306,
    dialect: 'mysql',
})
