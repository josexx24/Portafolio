import express,{Application} from 'express';
import cors from 'cors';

import { db } from '../db/connection';
import userRoutes from '../routes/username';
import postRoutes from '../routes/post';
import categoryRoutes from '../routes/category';
import tagRoutes from '../routes/tag';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usernames: '/api/usernames',
        post: '/api/post',
        category:'/api/category',
        tag: '/api/tag'
    }
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080';
        // Middlewares
        this.middlewares();
        // Definir mis rutas
        this.routes();
        // Conexion DB
        this.dbConnection();
    }

    routes(){
        this.app.use(this.apiPaths.usernames, userRoutes);
        this.app.use(this.apiPaths.post, postRoutes);
        this.app.use(this.apiPaths.category, categoryRoutes);
        this.app.use(this.apiPaths.tag, tagRoutes);
    }
    async dbConnection() {

        try {
            
            await db.authenticate();
            console.log('Database online');

        } catch (e:any) {
            throw new Error(e);
        }

    }

    middlewares(){
        // CORS
        this.app.use(cors());
        // Lectura del body
        this.app.use(express.json());
        // Carpeta pública
        this.app.use( express.static('public'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}

export default Server;