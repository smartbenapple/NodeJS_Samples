import express from 'express';
import cors from 'cors';
import { getData } from "./getData.js";

const app = express();
app.use(express.json());
app.use(cors()); // https://blog.logrocket.com/using-axios-set-request-headers/

app.get('/', (req,res) => { res.json({"message":"whats up?"}); });
app.get('/get', getData);
app.post('/get',(req,res) => { res.json({"message":"whats up from POST?"}); })

app.listen(8080, () => console.log('Get Service is listening'));