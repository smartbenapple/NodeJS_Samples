// Angular-Forms: https://angular.io/start/start-forms
//
import { Component, inject } from '@angular/core';
import { MovieClass } from '../Movies'
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'movie-input',
  templateUrl: './movieinput.component.html',
  styleUrl: './movieinput.component.css'
})
export class MovieInputComponent
{
    //functionCallback = (msg:string) => this.postMessageOccurred(msg);
    //cMovie = new MovieClass(this.functionCallback);

    // todo: testing injectable class.
    cMovie = inject(MovieClass);

    messages = [""]; // todo: put into own class

    // Concern: Tracks form data from <form>
    private formBuilder: FormBuilder = inject(FormBuilder);
    moviesForm = this.formBuilder.group({
      title: '',
      year: ''
    });

    constructor() {
      this.pushMessage("UI:[movieinput.ctr] Triggered.");

      // TODO: test getting var from MovieClass
      this.pushMessage("UI:[movieinput.ctr] LogMessage=" + this.cMovie.logMessages);

      this.cMovie.logMessages.push("Set by MovieInput");
    }

    /*postMessageOccurred(message: string)
    {
      this.pushMessage(message ?? "Event Handled.");
    }*/

    pushMessage(message:string)
    {
      this.messages.push(message);
    }

    clickSave(event:any)
    {
      let movieStg = JSON.stringify({ Title: this.moviesForm.value.title, Year: this.moviesForm.value.year });
      this.pushMessage("UI:[movieinput.clickSave] Triggered. Movie=" + movieStg.toString());

      // todo: send test data for testing
      this.pushMessage("UI:[movieinput.clickSave] LogMessage=" + this.cMovie.logMessages);
      this.cMovie.add({Title:"MovieInput", Year:"2024"});
      this.cMovie.logMessages.push("Set by Clicksave!"); //`Movie = ${this.moviesForm.value.title} ; ${this.moviesForm.value.year}`;
    }
}
