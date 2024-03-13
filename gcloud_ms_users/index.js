import express from 'express';
import { processAction } from './user/controller_org.js';

const app = express();
app.use(express.json());

app.post('/users', processAction);

// was port:8383
app.listen(8080, () => console.log('User Service is listening'));
