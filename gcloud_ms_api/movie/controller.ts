import { register } from '../connect.js';
import { getAll, create } from './model.js';

export async function getAllAction(request: any, response: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; })
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

export async function createAction(request: { body: any; }, response: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; })
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