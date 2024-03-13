import http from 'http';
import https from 'https';

// Idea: holds {} object => { destSrv: "MovieSrv", data:{...} }
//       dest: { host: "", port: "", path: "", data: {...} }
let queue = [];

export function addData(request, response)
{
  let body = request.body;
  console.log('[innerconnect.addData] Start = ' + body.toString());
  queue.push(body);
  watchesQueue();
  response.send("[innerconnect.addData] Add Data Success");
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

  console.log('[innerconnect.sendData] End = ' + itemStg);
}

function watchesQueue()
{
  console.log('[innerconnect.watchQueues] Start');
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
            console.log('[innerconnect.watchQueues] MovieSrv');
            dest = { host:"gcloud-ms-movies-axxh6chama-wl.a.run.app", port:"", path:"/movie", data:queueItem }; // was:8181; no ports for cloud.
            sendData(dest);
            break;
          case "UserSrv":
            console.log('[innerconnect.watchQueues] UserSrv');
            dest = { host:"gcloud-ms-users-axxh6chama-wl.a.run.app", port:"", path:"/users", data:queueItem }; // was:8383; no ports for cloud.
            sendData(dest);
            break;
          case "ApiSrv":
            console.log('[innerconnect.watchQueues] ApiSrv');
            dest = { host:"gcloud-ms-api-axxh6chama-wl.a.run.app", port:"", path:"/sendme", data:queueItem };
            sendData(dest);
            break;
        }
      }

      resolve();
      // todo: add sleep
    }
  })
}