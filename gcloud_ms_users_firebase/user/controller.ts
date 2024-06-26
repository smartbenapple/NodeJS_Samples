import { create, getAll } from './model.js';
import { sendData } from "./connect.js";

// { destSrv: "MovieSrv", data:{...} }
function createMessage(id: any, data: any)
{
    return {
        id: id,
        destSrv: 'ApiSrv', // todo: update to correct locations
        data
    };
}

export async function processAction(request: { body: any; }, response: any)
{
    console.log('UsersFb:[controller.processAction] Start');

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

async function getAllAction(request: { body: any; }, response: any)// was: channel, id
{
    console.log('UsersFb:[controller.getAllAction] Start');
    const users = await getAll();
    let body = request.body;
    const message = createMessage(body.id, users);
    console.log('UsersFb:[controller.getAllAction] message sent=' + JSON.stringify(message));
    sendData(message); // Send results back to innerconnect
    response.json({"message":"success"});
}

async function createAction(request: { body: any; }, response: any)// was: channel, id
{
    console.log('UsersFb:[controller.createAction] Start');
    let body = request.body;
    const newData = await create(body.data);
    // Note: Intentionally not returning the newData - not required.
    response.json({"message":"success"});
}