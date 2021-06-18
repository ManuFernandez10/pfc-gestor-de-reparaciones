import mysql from 'mysql';
import keys from './keys';

/**
 * Conexión del servidor API REST con la base de datos a través del fichero keys
 * que tiene la configuración necesaria para realizarla
 * 
 */
const pool = mysql.createPool(keys.database);

pool.getConnection((err,connection) => {
    if(err) throw err;
    connection.release();
    console.log('Conexión con la base de datos establecida');
});

export default pool;