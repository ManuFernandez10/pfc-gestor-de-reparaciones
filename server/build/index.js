"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const reparacionesRoutes_1 = __importDefault(require("./routes/reparacionesRoutes"));
//Clase que inicia el servidor API REST
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //Configuración del puerto
    config() {
        this.app.set('port', process.env.PORT || 3000);
        //Con morgan podremos ver en consola las peticiones que se hacen al servidor
        this.app.use(morgan_1.default('dev'));
        //Entender cors
        this.app.use(cors_1.default());
        //Configuración para que el servidor se comunique a través del formato JSON
        this.app.use(express_1.default.json());
        //Entender
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //Rutas del servidor
    routes() {
        this.app.use('/api/reparaciones', reparacionesRoutes_1.default);
    }
    //Método que inicia el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor iniciado en puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
