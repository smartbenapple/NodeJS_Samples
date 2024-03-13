// @ts-ignore
import https from 'https';
// Holds 'response' object
const registry = { "id": "" }; // author using a single json object; not an array.
export function register(message, response) {
    // ID from book an entire object?  Why not just use the object.id instead?
    let id = message.id; // id, should be a string
    //registry['type'] = 'message'; // not-in-book
    registry['id'] = response; // not-in-book: Add {} wrapper with type
    console.log(`API:[connect.register] Stored 'Response' successfully for id=${id}.`);
}
// not-in-book: overload registerId
export function registerId(id, response) {
    //registry['type'] = 'function'; // not-in-book
    registry['id'] = response; // not-in-book: Add {} wrapper with type
    console.log(`API:[connect.register] Stored 'Response' successfully for id=${id}.`);
}
export function answer(id, data) {
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
    else {
        // @ts-ignore
        regItem.send(data); // Assumption: regItem is 'response' object.
        //registry[id].send(data);
        console.log(`API:[connect.answer] Triggering send() for id=${id}.`);
    }
    // @ts-ignore
    delete registry[id];
}
export function registerHandler(request, response) {
    let body = request.body;
    answer(body.id, body.data); // Send answer back to original requesting browser
    console.log("API:[connect.registerHandler] id=" + body.id.toString());
}
//       dest: { host: "", port: "", path: "", data: {...} }
export function sendData(dest) {
    console.log('API:[connect.sendData] Start = ' + dest.toString());
    //let item = { Title:"Yesterday", Song:"River" };
    let itemStg = JSON.stringify(dest);
    // An object of options to indicate where to post to
    let options = {
        hostname: "gcloud-innerconnect-axxh6chama-wl.a.run.app",
        port: "",
        path: "/sendme",
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(itemStg)
        }
    };
    let post_req = https.request(options, function (res) {
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
