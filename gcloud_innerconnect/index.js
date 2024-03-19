import express from 'express';
import cors from 'cors';
import { addData, testResponse } from "./innerconnect.js";
const app = express();
app.use(express.json());
app.use(cors()); // https://blog.logrocket.com/using-axios-set-request-headers/
app.get('/sendme', testResponse);
app.post('/sendme', addData);
// was: port 8282
app.listen(8080, () => console.log('InnerConnect Service i' +
    's listening'));
