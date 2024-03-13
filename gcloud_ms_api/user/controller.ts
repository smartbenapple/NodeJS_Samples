import { register } from '../connect.js';
import { getAll, create } from './model.js';

export async function getAllAction(request: any, response: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; })
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

export async function createAction(request: { body: any; }, response: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; })
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