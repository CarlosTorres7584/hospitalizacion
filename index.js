import 'dotenv/config';
import express from 'express';

import routesPacientes from './routes/pacienteRuta.js';
import routesCamas from './routes/camaRuta.js';

import conectarDB from './config/dbClient.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

await conectarDB();

app.use('/api/pacientes', routesPacientes);
app.use ('/api/camas', routesCamas)

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log("servidor activo en puerto " + PORT));
}catch(e){
    console.log(e);
};

