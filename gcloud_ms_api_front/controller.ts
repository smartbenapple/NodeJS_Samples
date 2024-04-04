import { register, registerHandler, sendData, sendDataCreate } from './connect.js';

export function getUsers(request: any, response: any)
{
    let data = {"id":"?","data_username":"0","data_password":"0", "path":"/usersGet"}
    getAllAction(response, data);
}

export function getMovies(request: any, response: any)
{
    let data = {"id":"?","data_title":"0","data_year":"0", "path":"/moviesGet"}
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
    let newUser = request.body;
    let data = {"id":"?","data_username":`${newUser.username}`,"data_password":`${newUser.password}`, "path":"/usersPost"};
    createAction(response, data);
    response.json({"message":"Success"});
}

export function createMovies(request: any, response: any)
{
    let newMovie = request.body;
    let data = {"id":"?","data_title":`${newMovie.title}`,"data_year":`${newMovie.year}`,"path":"/moviesPost"};
    createAction2(response, data);
    response.json({"message":"Success"});
}

async function createAction(response: any, data: {"id":string, "data_username":string, "data_password":string, "path":string}) {
    try
    {
        //const message = await create(request.body);
        let id = register(response); // Save browser original response object.
        //response.json(newMovie);

        data.id = id;
        sendDataCreate(data); // todo: send work to Java api

    } catch (e) {
        response.status(500).json(e);
        console.log("API_F:[controller.createAction] Error.")
    }
}

async function createAction2(response: any, data: {"id":string, "data_title":string, "data_year":string, "path":string}) {
    try
    {
        //const message = await create(request.body);
        let id = register(response); // Save browser original response object.
        //response.json(newMovie);

        data.id = id;
        sendDataCreate(data); // todo: send work to Java api

    } catch (e) {
        response.status(500).json(e);
        console.log("API_F:[controller.createAction] Error.")
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