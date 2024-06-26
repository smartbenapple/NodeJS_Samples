import http from 'http';
import https from 'https';

// dest: { destSrv: "MovieSrv", data:{...} }
export function sendData(dest: { toString: () => string; })
{
  let itemStg = JSON.stringify(dest);
  console.log('MoviesFb:[connect.sendData] Start = ' + itemStg);
  // An object of options to indicate where to post to
  let options = {
    hostname: "gcloud-ms-innerconnect-axxh6chama-wl.a.run.app", // gcloud-ms-innerconnect-axxh6chama-wl.a.run.app
    port: "", // was=8181 locally; no ports on cloud
    path: "/moviesAnswer",
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

  console.log('MoviesFb:[connect.sendData] End = ' + itemStg);
}