import { connect } from 'amqplib';

let channel = null;
export const queue = 'task_user';

const registry = {}; // author using a single json object; not an array.

export function register(message, response)// not-in-book: param is message, not id.
{
    // ID from book an entire object?  Why not just use the object.id instead?
    let id = message.id; // id, should be a string
    //registry['type'] = 'message'; // not-in-book
    registry['id'] = response; // not-in-book: Add {} wrapper with type
}

// not-in-book: overload registerId
export function registerId(id, response)// not-in-book: param is message, not id.
{
    //registry['type'] = 'function'; // not-in-book
    registry['id'] = response; // not-in-book: Add {} wrapper with type
}

export function answer(id, data)
{
    // Issue: The javascript was not correctly detecting the 'function' typeof.
    let typeOfObject = typeof registry['id'];
    let regItem = registry['id']; // not-in-book
    //if (typeof registry[id] === 'function')
    if (typeOfObject === 'function') // not-in-book
    {
        //register[id](data);
        regItem(data); // not-in-book
    }
    else
    {
        regItem.send(data); // Assumption: regItem is 'response' object.
        //registry[id].send(data);
    }

    delete registry[id];
}

export async function getChannel()
{
    try
    {
        if (channel)
        {
            return channel;
        }
        const connection = await connect('amqp://192.168.1.7'); // amqp://rabbitmq
        channel = await connection.createChannel();

        const ok = await channel.assertQueue(queue);

        if (ok)
        {
            return channel;
        }
    }
    catch (error)
    {
        console.error(error);
        throw error;
    }
}

export function registerHandler(channel)
{
    channel.consume(queue, (receiveMessage) => {
        const messageData = JSON.parse(receiveMessage.content.toString());

        if (messageData.role === 'user' && messageData.cmd === 'answer')
        {
            console.log("[connect.registerHandler] answer=" + messageData.id);
            answer(messageData.id, messageData.data);
            channel.ack(receiveMessage);
        }
        else
        {
            channel.nack(receiveMessage);
        }
    })
}