import { create, getAll } from './model.js';
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
    let body = request.body;
    switch (body.cmd)
    {
        case 'getAll':
            console.log("[controller:getAll] message=" + body.data);
            await getAllAction(request, response);
            break;
        case 'create':
            console.log("[controller:Create] message=" + body.data);
            await createAction(request, response);
            break;
        default:
            //console.error('Unknown command');
            //channel.nack(message);
            break;
    }
}

async function getAllAction(request, response)// was: channel, id
{
    const data = await getAll();
    let body = request.body;
    const message = createMessage(body.destSrv, data);
    //send(message);
    sendData(message); // Note: Not using response stream intentionally
}

async function createAction(request, response)// was: channel, id
{
    let body = request.body;
    const newData = await create(body.data);
    const message = createMessage(body.id, newData);
    //send(message);
    sendData(message); // Note: Not using response stream intentionally
}