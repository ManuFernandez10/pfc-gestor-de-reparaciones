"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ReparacionesControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM reparacion', function (err, result) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Las llaves hacen que solo se obtenga el id
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM reparacion WHERE id_reparacion = ?', [id], function (err, result) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    //Inserta los datos en la base de datos que le llegan desde req.body
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO reparacion set ?', [req.body]);
            res.json({ message: 'Reparación insertada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE reparacion set ? WHERE id_reparacion = ?', [req.body, id]);
            res.json({ message: 'Reparación actualizada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM reparacion WHERE id_reparacion = ?', [id]);
            res.json({ message: 'Reparación eliminada' });
        });
    }
}
const reparacionesController = new ReparacionesControllers();
exports.default = reparacionesController;
