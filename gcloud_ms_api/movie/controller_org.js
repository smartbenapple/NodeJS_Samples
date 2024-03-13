import { register } from '../connect_org.js';
import { getAll, create } from './model_org.js';

export async function getAllAction(request, response)
{
    try
    {
        const message = await getAll();
        register(message, response); // Save browser original response object.
        //response.json(movies);
    }
    catch(e)
    {
        response.status(500).json(e);
        console.log("API:[controller.getAllAction] Error.")
    }
}

export async function createAction(request, response)
{
    try
    {
        const message = await create(request.body);
        register(message, response); // Save browser original response object.
        //response.json(newMovie);
    }
    catch(e)
    {
        response.status(500).json(e);
        console.log("API:[controller.createAction] Error.")
    }
}