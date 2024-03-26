import https from "https";

export function getData()
{
  // An object of options to indicate where to post to
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

  let post_req = https.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('Response: ' + chunk);
    });
  });

  post_req.end();
}

const url2 = 'https://gcloud-ms-get-axxh6chama-wl.a.run.app/get';

export function getData2()
{
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      a: 10,
      b: 20,
    }),
  };

  fetch(url2, options).then(
    (response) => response.log("hello.")
  ).then(
      (data) => console.log(data)
    )
}
