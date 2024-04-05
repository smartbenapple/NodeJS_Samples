import { getAll, create } from './model_gfs.js';
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
  console.log('MoviesFB:[controller.processAction] Start = ');

  let body = request.body;
  switch (body.cmd)
  {
    case 'getAll':
      console.log("Movies:[controller:getAll] message=" + JSON.stringify(body.data));
      await getAllAction(request, response);
      break;
    case 'create':
      console.log("Movies:[controller:Create] message=" + JSON.stringify(body.data));
      await createAction(request, response);
      break;
    default:
      //console.error('Unknown command');
      //channel.nack(message);
      break;
  }
}

async function getAllAction(request: { body: any; }, response: any )
{
  try
  {
    const movies = await getAll();
    let body = request.body;
    let bodyStg = JSON.stringify(body);
    console.log("MoviesFB:[controller:getAllAction] body=" + bodyStg);
    const message = createMessage(body.id, movies);
    console.log('MoviesFB:[controller.getAllAction] message sent=' + JSON.stringify(message));
    sendData(message); // Send results back to innerconnect
    console.log("MoviesFB:[controller:getAllAction] message=" + JSON.stringify(message));
    response.json({"message":"success"}); // respond back to innerconnect.
  }
  catch(e)
  {
    response.status(500).json(e);
  }
}

async function createAction(request: { body: any; }, response: any)
{
  try
  {
    let body = request.body;
    let bodyStg = JSON.stringify(body);
    console.log("MoviesFB:[controller:createAction] body=" + bodyStg);
    const newData = await create(body.data);
    const message = createMessage(body.id, newData);
    //sendData(message); // Note: Not using response stream intentionally
    console.log("MoviesFB:[controller:createAction] message=" + JSON.stringify(message));
    response.json({"message":"success"});
  }
  catch(e)
  {
    response.status(500).json(e);
  }
}