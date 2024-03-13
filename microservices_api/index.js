import express from 'express';
import { expressjwt } from 'express-jwt'; // not-in-book: change to destructure of name.
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

app.use('/login', loginRouter);

// TODO: Put back in later -> expressjwt( { secret: 'secret', algorithms: ["HS256"]} )
app.use('/user', userRouter); // not-in-book: add algorithms: ["HS256"]

app.use('/movie', expressjwt( { secret: 'secret', algorithms: ["HS256"]} ), movieRouter);

// sub for the registerHandler: handle user callbacks.
app.use('/sendme', registerHandler); // TODO

app.use((err, request, response, next) =>
{
    if (err.name === 'UnauthorizedError')
    {
        response.status(401).json('unauthorized');
    }
    else
    {
        next();
    }
});

app.listen(8080, () => console.log('API Gateway is listening'));