import mongoose from 'mongoose';

const pacienteSchema = new mongoose.Schema({
    nombre:{
        type: String,
        trim: true
    },

    fechaNacimiento:{
        type: Date,
    },

    correo:{
        type: String,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Correo inválido'] 
    },

    telefono:{
        type: Number
    },

    fechaRegistro:{
        type: Date,
        default: Date.now
    },

    cama:{
        type: Number
    }


});

const Paciente = mongoose.models.Paciente || mongoose.model('Paciente', pacienteSchema);

export default Paciente;