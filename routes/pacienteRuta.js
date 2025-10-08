import express from 'express';
const route = express.Router();
import {crearPaciente} from '../controllers/pacienteControl.js';

route.post('/', crearPaciente);

export default route;
