import https from "https";

export async function getData(request: any, response: any)
{
    try
    {
        // An object of options to indicate where to post to
        // 'Access-Control-Allow-Origin' : '*',
        // 'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
        // 'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE',
        let options = {
            hostname: "gcloud-ms-api-axxh6chama-wl.a.run.app",
            port: "", // Send to interconnect; was:8080 locally; no ports for cloud.
            path: "/movie",
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE',
                'Content-Type': 'application/json',
                'Content-Length': 0
            }
        };

        let returnValue: unknown = "";
        await new Promise( (accept, reject) => {
            let post_req = https.request(options, function(res) {
                res.setEncoding('utf8');
                res.on('data', function (data) {
                    console.log('Response: ' + data);
                    accept({"data":data});
                });
            });

            post_req.end();
        }).then((acc) => {
            returnValue = JSON.parse((acc as {"data":any}).data);
        });

        response.json({"message":returnValue});
    }
    catch(e:any)
    {
        response.status(500).json(e);
    }
}
