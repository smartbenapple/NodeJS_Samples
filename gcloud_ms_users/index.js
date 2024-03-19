import express from 'express';
import cors from 'cors';
import { processAction } from './user/controller.js';
const app = express();
app.use(express.json());
app.use(cors()); // https://blog.logrocket.com/using-axios-set-request-headers/
app.post('/users', processAction);
// was port:8383
app.listen(8080, () => console.log('User Service is listening'));
