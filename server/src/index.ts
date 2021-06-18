import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import reparacionesRoutes from './routes/reparacionesRoutes';

//Clase que inicia el servidor API REST
class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    //Configuración del puerto
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        //Con morgan podremos ver en consola las peticiones que se hacen al servidor
        this.app.use(morgan('dev'));
        //Entender cors
        this.app.use(cors());
        //Configuración para que el servidor se comunique a través del formato JSON
        this.app.use(express.json());
        //Entender
        this.app.use(express.urlencoded({extended: false}));
    }

    //Rutas del servidor
    routes(): void {
        this.app.use('/api/reparaciones', reparacionesRoutes);
    }

    //Método que inicia el servidor
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor iniciado en puerto', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();