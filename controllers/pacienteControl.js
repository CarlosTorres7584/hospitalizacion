import Paciente from '../models/pacienteModelo.js';
import Cama from '../models/camaModelo.js';

export async function crearPaciente(req, res) {
    try {
        const { nombre, fechaNacimiento, correo, telefono } = req.body;

        // Validaciones de tipo
        if (typeof nombre !== 'string' || 
            typeof fechaNacimiento !== 'string' || 
            typeof correo !== 'string') {
            return res.status(400).json({ message: 'Nombre, fechaNacimiento y correo deben ser texto' });
        }

        if (typeof telefono !== 'number') {
            return res.status(400).json({ message: '_id y teléfono deben ser números' });
        }

        // Validación de valores vacíos
        if (!nombre || !fechaNacimiento || !correo || !telefono) {
            return res.status(400).json({ message: 'Los datos no pueden ir vacíos' });
        }

        // Crear paciente
        const pacienteCreado = await Paciente.create({ nombre, fechaNacimiento, correo, telefono });
        debugger
        const pacienteObj = pacienteCreado.toObject();

        // Asignar cama
        const camaAsignada = await asignarCama(pacienteObj._id);
        console.log(camaAsignada);

        const objectToReturn = { ...pacienteObj, camaAsignada };

        // Respuesta
        return res.status(201).json({
            message: 'Paciente creado y cama asignada correctamente',
            paciente: objectToReturn,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}


export async function asignarCama(pacienteId) {
    try {
        const camaDisponible = await Cama.findOneAndUpdate(
            { estado: 'disponible' },
            { 
                estado: 'ocupado',
                pacienteId: pacienteId
            },
            { new: true }
        );

        if(!camaDisponible._id){
            res.status(404).json({
                message: 'Hubo un error al asignar cama'
                })
        }

         await Paciente.findByIdAndUpdate(
            pacienteId,
            { 
                cama: camaDisponible._id
            },
            { new: true }
        );
        
        return camaDisponible._id;
    

    } catch (error) {
        console.error('Error al asignar cama:', error);
        return res.status(500).json({ error: 'No se pudo asignar la cama' });
    }
}

