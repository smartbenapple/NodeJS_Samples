import jwt from 'jsonwebtoken';
import { Router } from 'express';
import { getAll } from './user/model.js';
import { register, registerId } from './connect.js';

const router = Router();

router.post('/', async (request, response) => {
    try
    {
        const { id } = await getAll();
        // not-in-book: changed to registerId
        registerId(id, (users) =>
        {
            const user = users.find( (u) => u.username === request.body.username && u.password === request.body.password);

            if (user)
            {
                const payload = { ...user };
                delete payload.password;
                const token = jwt.sign(payload, 'secret');
                response.json({ token });
            }
            else
            {
                response.status(401).json('unauthorized');
            }
        });
    }
    catch(e)
    {
        response.status(401).json('unauthorized');
    }
});

export { router }