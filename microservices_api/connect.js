import http from 'http';

// Holds 'response' object
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

export function registerHandler(request, response)
{
    let body = request.body;
    answer(body.id, body.data); // Send answer back to original requesting browser
}

//       dest: { host: "", port: "", path: "", data: {...} }
export function sendData(dest)
{
    console.log('[connect.sendData] Start = ' + dest.toString());

    //let item = { Title:"Yesterday", Song:"River" };
    let itemStg = JSON.stringify(dest);
    // An object of options to indicate where to post to
    let options = {
        host: "localhost",
        port: "8282",
        path: "/sendme",
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE',
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(itemStg)
        }
    };

    let post_req = http.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    post_req.write(itemStg);
    post_req.end();

    console.log('[connect.sendData] End = ' + itemStg);
}