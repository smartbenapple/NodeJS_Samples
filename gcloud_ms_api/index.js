// @ts-ignore
import express from 'express';
import cors from 'cors';
import { router as userRouter } from './user/index.js';
import { router as loginRouter } from './auth.js';
import { router as movieRouter } from './movie/index.js';
import { registerHandler } from "./connect.js";
//import {get} from "axios";
// TODO: Tear out
//const channel = await getChannel();
//registerHandler(channel);
const app = express();
app.use(express.json());
// Define the CORS options
// https://mufazmi.medium.com/solving-cors-issues-in-your-node-js-application-836506e63871
const corsOptions = {
    credentials: false,
    origin: ['*', 'http://localhost:8080', 'https://microservicesui-axxh6chama-wl.a.run.app', 'https://gcloud-innerconnect-axxh6chama-wl.a.run.app'] // Whitelist the domains you want to allow
};
app.use(cors(corsOptions)); // https://blog.logrocket.com/using-axios-set-request-headers/
app.use('/login', loginRouter);
// TODO: Put back in later -> expressjwt( { secret: 'secret', algorithms: ["HS256"]} )
app.use('/user', userRouter); // not-in-book: add algorithms: ["HS256"]
app.use('/movie', movieRouter);
// sub for the registerHandler: handle user callbacks.
app.use('/sendme', registerHandler); // TODO
// @ts-ignore
app.use((err, request, response, next) => {
    if (err.name === 'UnauthorizedError') {
        response.status(401).json('unauthorized');
    }
    else {
        next();
    }
});
app.listen(8080, () => console.log('API Gateway is listening'));
//# sourceMappingURL=index.js.map