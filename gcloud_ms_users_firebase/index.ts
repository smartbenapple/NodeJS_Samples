import express from 'express';
import cors from 'cors';
import { processAction } from './user/controller.js';

const app = express();
app.use(express.json());

// this service ->  https://gcloud-ms-users-firebase-axxh6chama-wl.a.run.app
// Define the CORS options
// https://mufazmi.medium.com/solving-cors-issues-in-your-node-js-application-836506e63871
const corsOptions = {
    credentials: false,
    origin: ['*', 'http://localhost:8080'] // Whitelist the domains you want to allow
};
app.use(cors(corsOptions)); // https://blog.logrocket.com/using-axios-set-request-headers/

app.post('/users', processAction);

// was port:8283
app.listen(8080, () => console.log('User Service is listening'));
