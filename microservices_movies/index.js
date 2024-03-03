import express from 'express';
import { getAllAction, createAction } from './controller.js';

const app = express();
app.use(express.json());

app.get('/movie', getAllAction);
app.post('/movie', createAction);

app.listen(8080, () => console.log('Movie Service is listening')); // was port:8181; port:8080 for gcloud test.