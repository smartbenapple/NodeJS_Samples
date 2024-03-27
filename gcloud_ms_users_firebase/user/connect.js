import http from 'http';
// dest: { destSrv: "MovieSrv", data:{...} }
export function sendData(dest) {
    console.log('[connect.sendData] Start = ' + dest.toString());
    let itemStg = JSON.stringify(dest);
    // An object of options to indicate where to post to
    let options = {
        hostname: "localhost",
        port: "8181",
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
    let post_req = http.request(options, function (res) {
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
