import { v4 as uuid4 } from 'uuid';
import { sendData } from '../connect.js';

export async function getAll()
{
    const message = { id: uuid4(), role: 'user', cmd: 'getAll', destSrv:"UserSrv" }; // TODO: Change json message type
    console.log(`API:[user/model.getAll] message=${JSON.stringify(message)}`);
    sendData(message);

    return message;
}

export async function create(dataItem: any)
{
    const message = { id: uuid4(), role: 'user', cmd: 'create', destSrv:"UserSrv", data: dataItem }; // TODO: Change json message type
    console.log(`API:[user/model.create] message=${JSON.stringify(message)}`);
    sendData(message);

    return message;
}