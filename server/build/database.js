"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
/**
 * Conexión del servidor API REST con la base de datos a través del fichero keys
 * que tiene la configuración necesaria para realizarla
 *
 */
const pool = mysql_1.default.createPool(keys_1.default.database);
pool.getConnection((err, connection) => {
    if (err)
        throw err;
    connection.release();
    console.log('Conexión con la base de datos establecida');
});
exports.default = pool;
