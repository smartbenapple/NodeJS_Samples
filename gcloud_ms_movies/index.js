import express from 'express';
import { getAllAction, createAction } from './controller.js';

const app = express();
app.use(express.json());

app.get('/movie', getAllAction);
app.post('/movie', createAction);

// was port:8181 - using 8080 to test on gcloud.
app.listen(8080, () => console.log('Movie Service is listening'));