import Cama from '../models/camaModelo.js';

export async function crearCama (req, res){
    try{
        const cama = req.body;
        await Cama.insertOne(cama);
        res.status(201).json({cama});
    }catch(e){
        console.log(e);
        res.status(500).json(e);
    }
};

export async function modificarCama (req, res){
    try{
        res.status(201).json('hola');
    }catch(e){
        console.log(e);
        res.status(500).json(e);
    }
}
