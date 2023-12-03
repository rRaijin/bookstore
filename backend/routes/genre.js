import express from 'express';

import Genre from '../models/genre.js';


const jsonParser = express.json();
const router = new express.Router();


export default router;
