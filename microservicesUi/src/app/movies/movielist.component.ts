import { Component } from '@angular/core';
import { MovieClass } from './Movies';

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
    for (let index in moviesArray)
    {
        let movie = moviesArray[index];
        this.pushMessage(movie.title);
    }

    this.movies = moviesArray;
  }

  pushMessage(message:string)
  {
    this.messages.push(message);
  }
}
