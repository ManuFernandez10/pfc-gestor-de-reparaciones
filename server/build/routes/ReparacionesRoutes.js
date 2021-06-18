"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reparacionesController_1 = __importDefault(require("../controllers/reparacionesController"));
class ReparacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //Rutas del servidor API REST para realizar las operaciones en la base de datos
    config() {
        this.router.get('/', reparacionesController_1.default.list);
        //Busca la reparación en función de su id
        this.router.get('/:id', reparacionesController_1.default.getOne);
        this.router.post('/', reparacionesController_1.default.create);
        //Se actualizan y eliminan reparaciones en función del id
        this.router.put('/:id', reparacionesController_1.default.update);
        this.router.delete('/:id', reparacionesController_1.default.delete);
    }
}
const reparacionesRoutes = new ReparacionesRoutes();
exports.default = reparacionesRoutes.router;
