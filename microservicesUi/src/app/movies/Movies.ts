import axios from "axios";
import events from 'events';

interface IMovie
{
  title:string,
  year: string,
}

const url = 'https://gcloud-ms-api-axxh6chama-wl.a.run.app/movie'; // locally: http://localhost:8181/movie
export class MovieClass
{
  movies = [{ "title": "Bambi", "year": "1956" }, { "title": "Snow White", "year": "1934" }];
  logMessage:string = "...";

  // TODO: testing event.
  // https://www.w3schools.com/nodejs/nodejs_events.asp
  EventName = "GetAllCompleted";
  EventGetAllCompleted = new events.EventEmitter();

  constructor()
  {
    this.movies = [{ "title": "Mary Poppins", "year": "1956" }, { "title": "Dumbo", "year": "1967" }];

    /*this.getAll().then(items =>
    {
      console.log("GetAll Called.");
      this.logMessage = "GetAll Called.";

      this.movies = [{ "title": "Iron Man", "year": "2008" }, { "title": "Troy", "year": "2009" }];
    });*/

    this.getAll();
  }
  getAll()
  {
    // Using setTimeout in Javascript: https://masteringjs.io/tutorials/node/sleep
    setTimeout(() => {
      console.log('This printed after about 1 second');
      this.EventGetAllCompleted.emit(this.EventName);
    }, 3000);

    /*axios.get(url).then(items =>
    {
      this.movies = items.data;
      this.EventGetAllCompleted.emit(this.EventName);
    });*/

    //return [{"title":"testing", "year":"2024"}];
  }
}
