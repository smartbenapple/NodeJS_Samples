import { v4 as uuid4 } from 'uuid';
import { getChannel, queue } from '../connect.js';

export async function getAll()
{
    const channel = await getChannel();
    const message = { id: uuid4(), role: 'user', cmd: 'getAll' };

    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));

    return message;
}

export async function create(data)
{
    const channel = await getChannel();
    const message = { id: uuid4(), role: 'user', cmd: 'create', data };

    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));

    return message;
}