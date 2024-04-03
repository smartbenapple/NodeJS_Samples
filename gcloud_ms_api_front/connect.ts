import http from "http";
import https from "https";
import {v4 as uuid4} from "uuid";

const registry = {"id":""}; // author using a single json object; not an array.

export function register(response: any)// not-in-book: param is message, not id.
{
    let id = uuid4();
    registry['id'] = response; // not-in-book: Add {} wrapper with type

    console.log(`API_f:[connect.register] Stored 'Response' successfully for id=${id}.`);

    return id;
}

// not-in-book: overload registerId
export function registerId(id: any, response: any)// not-in-book: param is message, not id.
{
    //registry['type'] = 'function'; // not-in-book
    registry['id'] = response; // not-in-book: Add {} wrapper with type

    console.log(`API_f:[connect.register] Stored 'Response' successfully for id=${id}.`);
}

export function answer(id: string | number, data: any)
{
    console.log(`API:[connect.answer] Start answering call for id=${id}.`);
    // Issue: The javascript was not correctly detecting the 'function' typeof.
    let typeOfObject = typeof registry['id'];
    let regItem = registry['id']; // not-in-book
    //if (typeof registry[id] === 'function')
    if (typeOfObject === 'function') // not-in-book
    {
        //register[id](data);
        // @ts-ignore
        regItem(data); // not-in-book
        console.log(`API:[connect.answer] Triggering function callback for id=${id}.`);
    }
    else
    {
        // @ts-ignore
        regItem.send(data); // Assumption: regItem is 'response' object.
        //registry[id].send(data);
        console.log(`API:[connect.answer] Triggering send() for id=${id}.`);
    }

    // @ts-ignore
    delete registry[id];
}

export function registerHandler(request: { body: any; }, response: any)
{
    let body = request.body;
    answer(body.id, body.data); // Send answer back to original requesting browser
    console.log("API:[connect.registerHandler] id=" + body.id.toString());
}

export function sendData(dest: {"id":string, "path":string})
{
    let itemStg = JSON.stringify(dest);
    console.log('API:[connect.sendData] Start = ' + itemStg);

    // An object of options to indicate where to post to
    let options = {
        hostname: "gcloud-ms-api-axxh6chama-wl.a.run.app", // gcloud-ms-api-axxh6chama-wl.a.run.app
        port: "", // was:8084 locally; no ports for cloud.
        path: dest.path,
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE',
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(itemStg)
        }
    };

    let post_req = https.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    post_req.write(itemStg);
    post_req.end();

    console.log('API:[connect.sendData] End = ' + itemStg);
}

//       dest: { host: "", port: "", path: "", data: {...} }
export function sendDataCreate(dest: {"id":string, "data":any, "path":string})
{
    let itemStg = JSON.stringify(dest);
    console.log('API:[connect.sendData] Start = ' + itemStg);

    // An object of options to indicate where to post to
    let options = {
        hostname: "gcloud-ms-api-axxh6chama-wl.a.run.app", // gcloud-ms-api-axxh6chama-wl.a.run.app
        port: "", // was:8084 locally; no ports for cloud.
        path: dest.path,
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE',
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(itemStg)
        }
    };

    let post_req = https.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    post_req.write(itemStg);
    post_req.end();

    console.log('API:[connect.sendData] End = ' + itemStg);
}