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

// TODO: test using JQuery $.ajax call into TS.
export async function GetMoviesAjax(setMovies)
{
  // Create URL
  let url = "https://gcloud-ms-api-front-axxh6chama-wl.a.run.app/movies";

  $.ajax({
    url: url,
    type: "GET",
    dataType: 'json', // what you expect back from server
    success: function(result)
    {
      console.log("UI:[getData.GetMoviesAjax] Movies Count=" + result.length);

      setMovies(result);
      //const scope = angular.element(document.getElementById('TblCtrlID')).scope();
      //scope.ticketscount = result.count;
      //scope.$apply(); // This works; but also using the ng-click works with onclick; to use ng-onchange requires matching the ng-model; 1-1.

      // trigger accept
      //acc();
    },
    error: function(error)
    {
      console.log('UI:[getData.GetMoviesAjax] Server Error: Maybe Unreachable.' + error);
      //UpdateServerMessage('UI:[getData.GetMoviesAjax] Server Error: Maybe Unreachable.', true);
      // trigger reject.
      //rej(err);
    }
  })

  /*return await new Promise((acc, rej) =>
  {
    // Note: Used for the AccessDb pagination testing.
    //const sessionUUID = GetFromStorage('sessionUUID');
    //console.log("[GetTicket] StorageHelper: sessionUUID="+sessionUUID);

  });*/
}
