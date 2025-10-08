import express from 'express';
const route = express.Router();
import {crearCama, modificarCama} from '../controllers/camaControl.js';

route.post('/', crearCama);
route.put('/', modificarCama);

export default route;
