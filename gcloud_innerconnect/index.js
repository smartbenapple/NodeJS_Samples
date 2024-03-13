import express from 'express';
import { addData, testResponse } from "./innerconnect.js";
const app = express();
app.use(express.json());
app.get('/sendme', testResponse);
app.post('/sendme', addData);
// was: port 8282
app.listen(8080, () => console.log('InnerConnect Service i' +
    's listening'));
