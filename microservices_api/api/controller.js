import { register } from './connect.js';
import { getAll, create } from '../api/user/model.js';

export async function getAllAction(request, response)
{
    try
    {
        const message = await getAll(); // not-in-book: const message =
        register(message, response);
        //response.json(userData);
    }
    catch(e)
    {
        console.error(e);
        response.status(500).json('Internal Server Error');
    }
}

export async function createAction(request, response)
{
    try
    {
        const message = await create(request.body); // not-in-book: const message =
        register(message, response);
        //response.js(newUser);
    }
    catch(e)
    {
        console.error(e);
        response.status(500).json('Internal Server Error');
    }
}