import { register, sendData } from './connect.js';

export function getUsers(request: any, response: any)
{
    let data = {"id":"?","data":"0", "path":"/users"}
    getAllAction(response, data);
}

export function getMovies(request: any, response: any)
{
    let data = {"id":"?","data":"0", "path":"/movies"}
    getAllAction(response, data);
}

async function getAllAction(response: any, data: {"id":string, "data":any, "path":string})
{
    try
    {
        //const message = await getAll();
        let id = register(response); // Save browser original response object.
        //response.json(movies);
        data.id = id;
        sendData(data); // todo: send work to Java api
    }
    catch(e)
    {
        response.status(500).json(e);
        console.log("API_F:[controller.getAllAction] Error." + e)
    }
}

export function createUsers(request: any, response: any)
{
    let data = {"id":"?","data":request.body, "path":"/users"}
    createAction(response, data);
}

export function createMovies(request: any, response: any)
{
    let data = {"id":"?","data":request.body, "path":"/movies"}
    createAction(response, data);
}

async function createAction(response: any, data: {"id":string, "data":any, "path":string}) {
    try
    {
        //const message = await create(request.body);
        let id = register(response); // Save browser original response object.
        //response.json(newMovie);

        data.id = id;
        sendData(data); // todo: send work to Java api

    } catch (e) {
        response.status(500).json(e);
        console.log("API:[controller.createAction] Error.")
    }
}