import axios from "axios";
import { Events } from '../events/EventEmitter';
import { getData } from "./getData";

interface IMovie
{
  Title:string,
  Year: string,
}

const url = 'https://gcloud-ms-api-axxh6chama-wl.a.run.app/movie'; // locally: http://localhost:8181/movie
const url2 = 'https://gcloud-ms-get-axxh6chama-wl.a.run.app/get';

export class MovieClass
{
  movies = [{ "Title": "Bambi", "Year": "1956" }, { "Title": "Snow White", "Year": "1934" }];
  logMessage:string = "...";

  // Success: testing event.
  // https://www.w3schools.com/nodejs/nodejs_events.asp
  EventName = "GetAllCompleted";
  EventGetAllCompleted = new Events();

  // Success: Test message callback
  _postMsgCallback: (msg:string) => void;
  // TODO: test catching error axios
  private err: ((reason: any) => PromiseLike<never>) | undefined | null;

  constructor(postMsgCallback: (msg:string) => void)
  {
    this._postMsgCallback = postMsgCallback;
    this.movies = [{ "Title": "Mary Poppins", "Year": "1956" }, { "Title": "Dumbo", "Year": "1967" }];

    this.getAll();
  }
  getAll()
  {
    this._postMsgCallback("GetAll Triggered.");

    // Using setTimeout in Javascript: https://masteringjs.io/tutorials/node/sleep
    /*setTimeout(() => {
      console.log('This printed after about 1 second');
      this.EventGetAllCompleted.emit(this.EventName);
      this._postMsgCallback("Ui:[Movies.GetAll] setTimeout completed.");
    }, 3000);*/

    const axiosConfig = { headers: {
    Accept: "application/json",
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE',
      "Content-Type": "application/json;charset=UTF-8",
  }};

    // Success: CORS worked for url2 test.
    /*axios.post(url2, {}, axiosConfig).then( response =>
      {
        this._postMsgCallback("Ui:[Movies.GetAll] axios-post response." + response.data);
      }).catch(this.err)
    {
      this._postMsgCallback("Ui:[Movies.GetAll] axios-post failed!" + this.err?.toString());
    };*/

    // Success: CORS worked for url;url2 test.
    axios.get(url2, axiosConfig).then( response =>
    {
      //this._postMsgCallback("Ui:[Movies.GetAll] axios-post response." + response.data.message);
      this.movies = response.data.message;
      this.EventGetAllCompleted.emit(this.EventName);
      //this.outputArray(this.movies);
    }).catch(this.err)
    {
      this._postMsgCallback("Ui:[Movies.GetAll] axios-post failed!" + this.err?.toString());
    };

    //getData();
    //this.getData2();

    //return [{"title":"testing", "year":"2024"}];
  }

  getData2()
  {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE',
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        a: 10,
        b: 20,
      }),
    };

    fetch(url2).then(
      (response) => response.json()
    ).then(
      (data) => {
        console.log(data);
        this._postMsgCallback("Fetch Called!");
      }
    ).catch((err) => {
      console.log("Unable to fetch -", err);
      this._postMsgCallback("Fetch Failed! err" + err);
    });
  } // end

  outputArray(array:{Title:string,Year:string}[])
  {
    //this._postMsgCallback("OutputArray Triggered.");
    for (let index in array)
    {
      let movie = array[index];
      this._postMsgCallback(movie.Title);
    }
  }
}

