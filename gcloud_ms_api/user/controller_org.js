import { register } from '../connect_org.js';
import { getAll, create } from './model_org.js';

export async function getAllAction(request, response)
{
    try
    {
        const message = await getAll(); // not-in-book: const message =
        register(message, response); // Save browser original response object.
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
        register(message, response); // Save browser original response object.
        //response.js(newUser);
    }
    catch(e)
    {
        console.error(e);
        response.status(500).json('Internal Server Error');
    }
}