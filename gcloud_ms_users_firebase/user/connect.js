import https from 'https';
// dest: { destSrv: "MovieSrv", data:{...} }
export function sendData(dest) {
    console.log('UsersFb:[connect.sendData] Start');
    console.log('UsersFb:[connect.sendData] url=https://gcloud-ms-innerconnect-axxh6chama-wl.a.run.app/usersAnswer');
    let itemStg = JSON.stringify(dest);
    // An object of options to indicate where to post to
    let options = {
        hostname: "gcloud-ms-innerconnect-axxh6chama-wl.a.run.app",
        port: "",
        path: "/usersAnswer",
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
            console.log('UsersFb:[connect.sendData] Response: ' + chunk);
        });
    });
    // post the data
    post_req.write(itemStg);
    post_req.end();
    console.log('UsersFb:[connect.sendData] End = ' + itemStg);
}
