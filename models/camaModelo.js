import mongoose from 'mongoose';

const camaSchema = new mongoose.Schema({

    _id: {
        type: Number
    },

    especialidad:{
        type: String
    },

   // disponible:{
     //   type: Boolean,
    //    default: true
   // },

    estado: {
        type: String,
        default: 'disponible'
    },

    pacienteId:{
        type: String
    },

    fechaAsignacion:{
        type: Date
    }

},{ versionKey: false });

const Cama = mongoose.models.Cama || mongoose.model('Cama', camaSchema);
export default Cama;