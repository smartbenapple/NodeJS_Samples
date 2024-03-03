import { getAllAction, createAction } from './controller.js';
import { getChannel, queue } from './connect.js';

const channel = await getChannel();

channel.consume(queue, (message) =>
{
    const messageData = JSON.parse(message.content.toString());
    if (messageData.role === 'user')
    {
        switch (messageData.cmd)
        {
            case 'getAll':
                console.log("[Index.Consume:getAll] message=" + message);
                getAllAction(channel, messageData.id);
                break;
            case 'create':
                console.log("[Index.Consume:Create] message=" + message);
                createAction(channel, messageData.id, messageData.data);
                break;
            default:
                //console.error('Unknown command');
                channel.nack(message);
                break;
        }
    }
});

const messageTest = { id:'123', role:'user', cmd:'create', data:{ id:'543', name:'Mic' } };
const messageTestStringy = JSON.stringify(messageTest);
console.log("Message as stringify=" + messageTestStringy);

