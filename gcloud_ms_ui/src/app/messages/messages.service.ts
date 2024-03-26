import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MessagesService
{
  // Messages
  messages = [""];

  constructor()
  {
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

  postMessageOccurred(message: string)
  {
    this.pushMessage(message ?? "Event Handled.");
  }
}
