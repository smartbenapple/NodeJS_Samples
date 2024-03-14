import axios from "axios";

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

  constructor()
  {
    this.movies = [{ "title": "Mary Poppins", "year": "1956" }, { "title": "Dumbo", "year": "1967" }];

    /*this.getAll().then(items =>
    {
      console.log("GetAll Called.");
      this.logMessage = "GetAll Called.";

      this.movies = [{ "title": "Iron Man", "year": "2008" }, { "title": "Troy", "year": "2009" }];
    });*/
  }
  getAll() :[{title:string, year:string}]
  {
    return [{"title":"testing", "year":"2024"}];
  }
}
