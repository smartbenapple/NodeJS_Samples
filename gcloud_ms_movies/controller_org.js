//import { getAll, create } from './models/model_dfs.js';
//import { getAll, create } from './models/model_mdb.js';
import { getAll, create } from './models/model_gfs.cjs';
import { sendData } from "./connect.js";

// { destSrv: "MovieSrv", data:{...} }
function createMessage(id, data)
{
    return {
        id: id,
        destSrv: 'ApiSrv', // todo: update to correct locations
        data
    };
}

export async function processAction(request, response)
{
    console.log('Movies:[controller.processAction] Start = ');

    let body = request.body;
    switch (body.cmd)
    {
        case 'getAll':
            console.log("Movies:[controller:getAll] message=" + body.data);
            await getAllAction(request, response);
            break;
        case 'create':
            console.log("Movies:[controller:Create] message=" + body.data);
            await createAction(request, response);
            break;
        default:
            //console.error('Unknown command');
            //channel.nack(message);
            break;
    }
}

async function getAllAction(request, response)
{
    try
    {
        const movies = await getAll();
        let body = request.body;
        console.log("Movies:[controller:createAction] body=" + body.toString());
        const message = createMessage(body.destSrv, movies);
        sendData(message); // Note: Not using response stream intentionally
        console.log("Movies:[controller:getAllAction] message=" + message.toString());
        //response.json(movies);
    }
    catch(e)
    {
        response.status(500).json(e);
    }
}

async function createAction(request, response)
{
    try
    {
        let body = request.body;
        console.log("Movies:[controller:createAction] body=" + body.toString());
        const newData = await create(body.data);
        const message = createMessage(body.id, newData);
        sendData(message); // Note: Not using response stream intentionally
        console.log("Movies:[controller:createAction] message=" + message.toString());
        //response.json(movie);
    }
    catch(e)
    {
        response.status(500).json(e);
    }
}