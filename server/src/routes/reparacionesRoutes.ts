import { Router } from 'express';
import reparacionesController from '../controllers/reparacionesController';

class ReparacionesRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    //Rutas del servidor API REST para realizar las operaciones sobre la base de datos
    config(): void {
        this.router.get('/',reparacionesController.list);
        //Busca la reparación en función de su id
        this.router.get('/:id',reparacionesController.getOne);
        this.router.post('/', reparacionesController.create);
        //Se actualizan y eliminan reparaciones en función del id
        this.router.put('/:id', reparacionesController.update);
        this.router.delete('/:id', reparacionesController.delete);
    }
}

const reparacionesRoutes = new ReparacionesRoutes();
export default reparacionesRoutes.router;