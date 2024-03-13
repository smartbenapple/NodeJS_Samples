import { v4 as uuid4 } from 'uuid';
import { sendData } from '../connect.js';

export async function getAll()
{
    const message = { id: uuid4(), role: 'user', cmd: 'getAll', destSrv:"UserSrv" }; // TODO: Change json message type

    sendData(message);

    return message;
}

export async function create(data)
{
    const message = { id: uuid4(), role: 'user', cmd: 'create', destSrv:"UserSrv", data }; // TODO: Change json message type

    sendData(message);

    return message;
}