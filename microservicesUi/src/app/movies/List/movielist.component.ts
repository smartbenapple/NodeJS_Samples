import { Component, inject } from '@angular/core';
import { MovieClass } from '../Movies';
import { Events } from '../../events/EventEmitter';
import { MessagesService } from "../../messages/messages.service";

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

  // Concern: Messaging Service
  messageService:MessagesService = inject(MessagesService);

  constructor()
  {
    // todo: testing injectable class.
    const cMovie = inject(MovieClass); //new MovieClass(this.functionCallback);
    cMovie.logMessages.push("Set by MovieList");

    // @ts-ignore
    const moviesArray :[{Title:string, Year:string}] = cMovie.movies;
    this.movies = moviesArray;

    // Tie to EventEmitter
    const functionCallback2 = (mv:MovieClass) => this.reloadMoviesOccurred(cMovie);
    cMovie.EventGetAllCompleted.on(cMovie.EventName, functionCallback2);
  }

  testEventsHere()
  {
    //const functionCallback = (msg:string) => this.postMessageOccurred("Test EventHere...");

    // todo: test custom version
    const events = new Events();
    events.on("MyEvent", this.messageService.pushMessage);
    setTimeout(() => {
      this.messageService.pushMessage("SetTimeout triggered...  Calling Emit on Custom-Event.");
      events.emit("MyEvent");
    }, 2500);
  }

  reloadMoviesOccurred(movieClass:MovieClass)
  {
    this.messageService.pushMessage("Reload Movies Occurred.");

    const items = movieClass.movies;
    this.movies = items;
    this.messageService.outputArray(items);
  }
}
