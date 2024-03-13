import http from 'http';
import https from 'https';
import axios from 'axios';

const url = 'https://gcloud-ms-users-axxh6chama-wl.a.run.app/users'; // Axios

// Idea: holds {} object => { destSrv: "MovieSrv", data:{...} }
//       dest: { host: "", port: "", path: "", data: {...} }
let queue = [];

export function addData(request, response)
{
    let body = request.body;
    queue.push(body);
    watchesQueue();
}

// TODO: Testing axios
async function sendData2(dest)
{
    console.log('[innerconnect.sendData2] Start = ' + dest.data.toString());
    const { data } = await axios.post(url, dest);
}

//       dest: { host: "", port: "", path: "", data: {...} }
function sendData(dest)
{
    console.log('[innerconnect.sendData] Start = ' + dest.data.toString());

    //let item = { Title:"Yesterday", Song:"River" };
    let itemStg = JSON.stringify(dest.data);
    // An object of options to indicate where to post to
    let options = {
        hostname: dest.host,
        port: dest.port,
        path: dest.path,
        method: 'POST',
        headers: {
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

    console.log('[innerconnect.sendData] End = ' + itemStg);
}

function watchesQueue()
{
    new Promise((resolve,reject) => {

        //while(true)
        {
            // check the queue for items
            if (queue.length > 0)
            {
                // if true, then pop off item and send to destination.
                let queueItem = queue.pop();

                // Check destination
                var dest = {};
                switch (queueItem.destSrv)
                {
                    case "MovieSrv":
                        dest = { host:"localhost", port:"8181", path:"/movie", data:queueItem };
                        sendData(dest);
                        break;
                    case "UserSrv":
                        dest = { host:"gcloud-ms-users-axxh6chama-wl.a.run.app", port:"", path:"/users", data:queueItem }; // was: 8383 locally
                        sendData(dest);
                        break;
                    case "ApiSrv":
                        dest = { host:"localhost", port:"8080", path:"/sendme", data:queueItem };
                        sendData(dest);
                        break;
                }
            }

            resolve();
            // todo: add sleep
        }
    })
}