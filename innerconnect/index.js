import express from 'express';
import { addData } from "./innerconnect.js";

const app = express();
app.use(express.json());

//app.get('/sendme', getAllAction);
app.post('/sendme', addData);

app.listen(8282, () => console.log('InnerConnect Service i' +
    's listening'));