import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI

const conectarDB = async ()=>{
    try{
        await mongoose.connect(MONGO_URI);
        console.log('conexion a MongoDB exitosa');

    }catch (e){
        console.log("Error no se conecto a MongoDb: ", e.message);
        process.exit(1);
    }
};

export default conectarDB;