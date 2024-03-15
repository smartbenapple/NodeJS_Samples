import { Component } from '@angular/core';
import { MovieClass } from './Movies';
import { Events } from '../events/EventEmitter';

@Component({
  selector: 'app-movies',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovieListComponent
{
  title = 'My Movie List';

  // Movies
  movies = [{"Title":"Bambi", "Year":"1965"},{"Title":"Iron Man", "Year":"2008"}];

  // Messages
  messages = [""];

  functionCallback = (msg:string) => this.postMessageOccurred(msg);

  constructor()
  {
    const cMovie = new MovieClass(this.functionCallback);

    // @ts-ignore
    const moviesArray :[{Title:string, Year:string}] = cMovie.movies;
    this.movies = moviesArray;

    // Tie to EventEmitter
    const functionCallback2 = (mv:MovieClass) => this.reloadMoviesOccurred(cMovie);
    cMovie.EventGetAllCompleted.on(cMovie.EventName, functionCallback2);
  }

  testEventsHere()
  {
    const functionCallback = (msg:string) => this.postMessageOccurred("Test EventHere...");

    // todo: test custom version
    const events = new Events();
    events.on("MyEvent", functionCallback);
    setTimeout(() => {
      //this.pushMessage("SetTimeout triggered...  Calling Emit on Custom-Event.");
      events.emit("MyEvent");
    }, 2500);
  }

  postMessageOccurred(message: string)
  {
    this.pushMessage(message ?? "Event Handled.");
  }

  reloadMoviesOccurred(movieClass:MovieClass)
  {
    //this.pushMessage("Reload Movies Occurred.");

    const items = movieClass.movies;
    this.movies = items;
    this.outputArray(items);
  }

  pushMessage(message:string)
  {
    this.messages.push(message);
  }

  outputArray(array:{Title:string,Year:string}[])
  {
    //this.pushMessage("OutputArray Triggered.");
    // for() index value is not the direct array item -> https://www.microverse.org/blog/how-to-loop-through-the-array-of-json-objects-in-javascript
    for (let index in array)
    {
      let movie = array[index];
      this.pushMessage(movie.Title);
    }
  }
}
