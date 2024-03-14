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
  movies = [{"title":"Bambi", "year":"1965"},{"title":"Iron Man", "year":"2008"}];

  // Messages
  messages = [""];

  constructor()
  {
    const cMovie = new MovieClass();
    // @ts-ignore
    const moviesArray :[{title:string, year:string}] = cMovie.movies;
    // for() index value is not the direct array item -> https://www.microverse.org/blog/how-to-loop-through-the-array-of-json-objects-in-javascript
    for (let index in moviesArray)
    {
        let movie = moviesArray[index];
        this.pushMessage(movie.title);
    }

    this.movies = moviesArray;

    // Tie to EventEmitter
    //cMovie.EventGetAllCompleted.on(cMovie.EventName, this.handleEventTest);

    // todo: testing event.
    this.testEventsHere();
  }

  testEventsHere()
  {
    const functionCallback = () => this.handleEventTest();

    // todo: test custom version
    const events = new Events();
    events.on("MyEvent", functionCallback);
    setTimeout(() => {
      this.pushMessage("SetTimeout triggered...  Calling Emit on Custom-Event.");
      events.emit("MyEvent");
    }, 2500);
  }

  handleEventTest()
  {
    this.pushMessage("Event Handled.");
  }

  pushMessage(message:string)
  {
    this.messages.push(message);
  }
}
