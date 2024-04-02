import { register, registerHandler, sendData, sendDataCreate } from './connect.js';

export function getUsers(request: any, response: any)
{
    let data = {"id":"?","data":'{"username":"0","password":"0"}', "path":"/usersGet"}
    getAllAction(response, data);
}

export function getMovies(request: any, response: any)
{
    let data = {"id":"?","data":"0", "path":"/moviesGet"}
    getAllAction(response, data);
}

async function getAllAction(response: any, data: {"id":string, "path":string})
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
    let data = {"id":"?","data":request.body, "path":"/usersPost"}
    createAction(response, data);
}

export function createMovies(request: any, response: any)
{
    let data = {"id":"?","data":request.body, "path":"/moviesPost"}
    createAction(response, data);
}

async function createAction(response: any, data: {"id":string, "data":any, "path":string}) {
    try
    {
        //const message = await create(request.body);
        let id = register(response); // Save browser original response object.
        //response.json(newMovie);

        data.id = id;
        sendDataCreate(data); // todo: send work to Java api

    } catch (e) {
        response.status(500).json(e);
        console.log("API:[controller.createAction] Error.")
    }
}

export function sendMeUsers(request: any, response: any)
{
    registerHandler(request, response);
}

export function sendMeMovies(request: any, response: any)
{
    registerHandler(request, response);
}