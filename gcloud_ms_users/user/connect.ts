import http from 'http';
import https from 'https';

// dest: { destSrv: "MovieSrv", data:{...} }
export function sendData(dest: { toString: () => string; })
{
    console.log('[connect.sendData] Start = ' + dest.toString());
    let itemStg = JSON.stringify(dest);
    // An object of options to indicate where to post to
    let options = {
        hostname: "gcloud-innerconnect-axxh6chama-wl.a.run.app",
        port: "", // send to interconnect; was=8282 locally; no ports on cloud
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

    let post_req = https.request(options, function(res) {
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