import express from 'express';
import cors from 'cors';
import { addData, testResponse } from "./innerconnect.js";
const app = express();
app.use(express.json());
// Define the CORS options
// https://mufazmi.medium.com/solving-cors-issues-in-your-node-js-application-836506e63871
const corsOptions = {
    credentials: false,
    origin: ['*', 'http://localhost:8080'] // Whitelist the domains you want to allow
};
app.use(cors()); // https://blog.logrocket.com/using-axios-set-request-headers/
app.get('/sendme', testResponse);
app.post('/sendme', addData);
// was: port 8282
app.listen(8080, () => console.log('InnerConnect Service i' +
    's listening'));
