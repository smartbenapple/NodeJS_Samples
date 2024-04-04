import { inject, Injectable} from '@angular/core';
import axios from "axios";
import { Events } from '../events/EventEmitter';
import { getData, GetMoviesAjax } from "./getData";
import { MessagesService } from "../messages/messages.service";
import * as $ from 'jquery';

interface IMovie
{
  title:string,
  year: string,
}

const url = 'https://gcloud-ms-api-front-axxh6chama-wl.a.run.app/movies'; // locally: http://localhost:8181/movie
//const url2 = 'https://gcloud-ms-get-axxh6chama-wl.a.run.app/get';

@Injectable({
  providedIn: 'root'
})
export class MoviesService
{
  // todo: why use any?
  movies: any = [{ "title": "Bambi", "year": "1956" }, { "title": "Snow White", "year": "1934" }];

  // Success: testing event.
  // https://www.w3schools.com/nodejs/nodejs_events.asp
  EventName = "GetAllCompleted";
  EventGetAllCompleted = new Events();

  // Concern: Messaging Service
  messagesService = inject(MessagesService);

  // Success: Test message callback
  //_postMsgCallback: ((msg: string) => void) = () => { console.log("") };
  // TODO: test catching error axios
  private err: ((reason: any) => PromiseLike<never>) | undefined | null;

  constructor()
  //constructor(postMsgCallback:(msg:string) => void)
  {
    //this._postMsgCallback = postMsgCallback;
    this.movies = [{ "Title": "Mary Poppins", "Year": "1956" }, { "Title": "Dumbo", "Year": "1967" }];

    this.getAll();
  }

  // TODO: Test if adds record.
  add(item: IMovie)
  {
    this.messagesService.pushMessage("Ui:[Movies.add] Triggered.");

    let itemStg = JSON.stringify(item);
    //let lengthStg = getByteLengths(item);
    const axiosConfig = { headers: {
        Accept: "application/json",
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS',
        "Content-Type": "application/json;charset=UTF-8"
      }};

    // todo: CORS worked for url2 test.
    axios.post(url, itemStg, axiosConfig).then( response =>
      {
        this.messagesService.pushMessage("Ui:[Movies.add] axios-post response." + response.data);
      }).catch(this.err)
    {
      this.messagesService.pushMessage("Ui:[Movies.add] axios-post failed!" + this.err?.toString());
    };

  }

  getAll()
  {
    this.messagesService.pushMessage("GetAll Triggered.");

    this.getMovies();

    // Using setTimeout in Javascript: https://masteringjs.io/tutorials/node/sleep
    /*setTimeout(() => {
      console.log('This printed after about 1 second');
      this.EventGetAllCompleted.emit(this.EventName);
      this._postMsgCallback("Ui:[Movies.GetAll] setTimeout completed.");
    }, 3000);*/

    /*const axiosConfig = { headers: {
    Accept: "application/json",
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE',
      "Content-Type": "application/json;charset=UTF-8",
  }};*/

    // Success: CORS worked for url2 test.
    /*axios.post(url2, {}, axiosConfig).then( response =>
      {
        this._postMsgCallback("Ui:[Movies.GetAll] axios-post response." + response.data);
      }).catch(this.err)
    {
      this._postMsgCallback("Ui:[Movies.GetAll] axios-post failed!" + this.err?.toString());
    };*/

    // Success: CORS worked for url;url2 test.
    /*axios.get(url, axiosConfig).then( response =>
    {
      //this._postMsgCallback("Ui:[Movies.GetAll] axios-post response." + response.data.message);
      this.movies = response.data.message;
      this.EventGetAllCompleted.emit(this.EventName);
      //this.outputArray(this.movies);
    }).catch(this.err)
    {
      this.messagesService.pushMessage("Ui:[Movies.GetAll] axios-post failed!" + this.err?.toString());
    };*/
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

    fetch(url).then(
      (response) => response.json()
    ).then(
      (data) => {
        console.log(data);
        this.messagesService.pushMessage("Fetch Called!");
      }
    ).catch((err) => {
      console.log("Unable to fetch -", err);
      this.messagesService.pushMessage("Fetch Failed! err" + err);
    });
  } // end

  getMovies()
  {
    this.getMoviesAjax().then( (movies) =>
    {
      this.movies = movies;
      this.EventGetAllCompleted.emit(this.EventName);
      this.outputArray(this.movies);
    }).catch ((err) =>
    {
      console.log("UI:[movies.service.getMovies] Error=" + err);
    });
  }

  async getMoviesAjax()
  {
    this.messagesService.pushMessage("UI:[movies.service.getMoviesAjax] Triggered.");
    return await new Promise((acc, rej) =>
    {
      // Create URL
      let url = "https://gcloud-ms-api-front-axxh6chama-wl.a.run.app/movies";

      // Set $ for JQuery access in TypeScript => import * as $ from 'jquery';
      // Ref: https://stackoverflow.com/questions/30623825/how-to-use-jquery-with-angular
      $.ajax({
        url: url,
        type: "GET",
        dataType: 'json', // what you expect back from server
        success: function (result) {
          console.log("UI:[getData.GetMoviesAjax] Movies Count=" + result.length);
          // trigger accept
          acc(result);
        },
        error: function (error) {
          console.log('UI:[getData.GetMoviesAjax] Server Error: Maybe Unreachable.' + error);
          //UpdateServerMessage('UI:[getData.GetMoviesAjax] Server Error: Maybe Unreachable.', true);
          // trigger reject.
          rej(error);
        }
      }); // end $.ajax
    }); // end Promise()
  }

  outputArray(array:{title:string,year:string}[])
  {
    //this._postMsgCallback("OutputArray Triggered.");
    for (let index in array)
    {
      let movie = array[index];
      this.messagesService.pushMessage(movie.title);
    }
  }
}

