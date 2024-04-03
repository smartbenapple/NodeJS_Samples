import express from 'express';
import cors from 'cors';
import { processAction } from './models/controller.js';

const app = express();
app.use(express.json());

// gCloud-> https://glcoud-ms-movies-firebase-axxh6chama-wl.a.run.app
// locally: 8383
// Define the CORS options
// https://mufazmi.medium.com/solving-cors-issues-in-your-node-js-application-836506e63871
const corsOptions = {
  credentials: false,
  origin: ['*', 'http://localhost:8080'] // Whitelist the domains you want to allow
};
app.use(cors()); // https://blog.logrocket.com/using-axios-set-request-headers/

//app.get('/movie', getAllAction);
app.post('/movies', processAction);

// was port:8383 locally
app.listen(8080, () => console.log('Movie Service is listening'));