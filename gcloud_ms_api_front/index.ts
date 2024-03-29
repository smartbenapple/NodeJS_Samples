import express from 'express';
import cors from 'cors';
import { getUsers, getMovies, createUsers, createMovies } from "./controller.js"

const app = express();
app.use(express.json());

// Define the CORS options
// https://mufazmi.medium.com/solving-cors-issues-in-your-node-js-application-836506e63871
const corsOptions = {
    credentials: false,
    origin: ['*', 'http://localhost:8080','https://microservicesui-axxh6chama-wl.a.run.app','https://gcloud-innerconnect-axxh6chama-wl.a.run.app'] // Whitelist the domains you want to allow
};
app.use(cors(corsOptions));

// TODO: Put back in later -> expressjwt( { secret: 'secret', algorithms: ["HS256"]} )
app.get('/users', getUsers); // not-in-book: add algorithms: ["HS256"]
app.get('/movies', getMovies);

app.post('/users', createUsers); // not-in-book: add algorithms: ["HS256"]
app.post('/movies', createMovies);

app.listen(8080, () => console.log('API-Front Gateway is listening'));