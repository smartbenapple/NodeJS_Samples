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

  // Movies Array
  movies = [{"title":"Bambi", "year":"1965"},{"title":"Iron Man", "year":"2008"}];

  constructor()
  {
    const cMovie = new MovieClass();
    this.movies = cMovie.movies;
  }
}
