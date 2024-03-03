import { connect } from 'amqplib';

let channel = null;
export const queue = 'task_user';

export async function getChannel()
{
    try
    {
        if (channel)
        {
            return channel;
        }
        const connection = await connect('amqp://rabbitmq'); // amqp://rabbitmq or amqp://localhost or amqp://192.168.1.7
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