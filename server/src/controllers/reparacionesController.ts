import {Request, Response} from 'express';
import pool from '../database';

class ReparacionesControllers{

    public async list (req: Request, res:Response) {
        await pool.query('SELECT * FROM reparacion', function(err,result){
            if(err) throw err;
            res.json(result); 
        });
    }

    public async getOne (req: Request, res:Response): Promise<void> {
        //Las llaves hacen que solo se obtenga el id
        const { id_reparacion } = req.params;
        await pool.query('SELECT * FROM reparacion WHERE id_reparacion = ?', [id_reparacion], function(err,result){
            if(err) throw err;
            res.json(result); 
        });
    }

    //Inserta los datos en la base de datos que le llegan desde req.body
    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO reparacion set ?', [req.body])
        res.json({message: 'Reparación insertada'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id_reparacion } = req.params;
        await pool.query('UPDATE reparacion set ? WHERE id_reparacion = ?', [req.body, id_reparacion]);
        res.json({message: 'Reparación actualizada'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id_reparacion } = req.params;
        await pool.query('DELETE FROM reparacion WHERE id_reparacion = ?', [id_reparacion]);
        res.json({message: 'Reparación eliminada'});
    }
}

const reparacionesController = new ReparacionesControllers();
export default reparacionesController;