"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = require("../db/connection");
const username_1 = __importDefault(require("../routes/username"));
const post_1 = __importDefault(require("../routes/post"));
const category_1 = __importDefault(require("../routes/category"));
const tag_1 = __importDefault(require("../routes/tag"));
class Server {
    constructor() {
        this.apiPaths = {
            usernames: '/api/usernames',
            post: '/api/post',
            category: '/api/category',
            tag: '/api/tag'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8080';
        // Middlewares
        this.middlewares();
        // Definir mis rutas
        this.routes();
        // Conexion DB
        this.dbConnection();
    }
    routes() {
        this.app.use(this.apiPaths.usernames, username_1.default);
        this.app.use(this.apiPaths.post, post_1.default);
        this.app.use(this.apiPaths.category, category_1.default);
        this.app.use(this.apiPaths.tag, tag_1.default);
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.db.authenticate();
                console.log('Database online');
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use(cors_1.default());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta pública
        this.app.use(express_1.default.static('public'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map