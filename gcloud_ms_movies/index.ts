import express from 'express';
import cors from 'cors';
import { processAction } from './controller.js';

const app = express();
app.use(express.json());
app.use(cors()); // https://blog.logrocket.com/using-axios-set-request-headers/

//app.get('/movie', getAllAction);
app.post('/movie', processAction);

// was port:8181 locally - using 8080 to test on gcloud.
app.listen(8080, () => console.log('Movie Service is listening'));