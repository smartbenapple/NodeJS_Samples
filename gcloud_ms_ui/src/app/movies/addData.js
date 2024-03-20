const url = 'https://gcloud-ms-api-axxh6chama-wl.a.run.app/movie';

export async function addDataJQuery(item, messagesService)
{
  return await new Promise((acc, rej) =>
  {
    // https://stackoverflow.com/questions/5750696/cross-origin-resource-sharing-cors-post-request-works-from-plain-javascript-b
    const header = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS',
      'Content-Type': 'application/json',
      'Content-Length': 0
    };

    $.ajax({
      url: url,
      type: "POST",
      crossDomain: true, // https://stackoverflow.com/questions/5750696/cross-origin-resource-sharing-cors-post-request-works-from-plain-javascript-b
      dataType: 'json', // what you expect back from server
      contentType: 'application/json', // what you expect to send to server
      data: JSON.stringify(item),
      header: header,
      //beforeSend: function(xhr){xhr.setRequestHeader(header);},
      success: function(result)
      {
        try
        {
          const resultStg = JSON.stringify(result);
          messagesService.pushMessage('[addDataJQuery] Success.' + resultStg);
          acc();

        } catch (error)
        {
          messagesService.pushMessage('[addDataJQuery] Error=' + error);
          rej(error);
        }

      },
      error: function(error)
      {
        const errorString = JSON.stringify(error);
        messagesService.pushMessage('Server Error: Maybe Unreachable.=' + errorString);
      }
    });

  });
}
