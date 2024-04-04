// Angular-Forms: https://angular.io/start/start-forms
//
import { Component, inject } from '@angular/core';
import { MoviesService } from '../movies.service'
import { FormBuilder } from "@angular/forms";
import { MessagesService } from "../../messages/messages.service";

@Component({
  selector: 'movie-input',
  templateUrl: './movieinput.component.html',
  styleUrl: './movieinput.component.css'
})
export class MovieInputComponent
{
    // Success: testing injectable class.
    cMovie = inject(MoviesService);
    messagesService = inject(MessagesService);

    // Concern: Tracks form data from <form>
    private formBuilder: FormBuilder = inject(FormBuilder);
    moviesForm = this.formBuilder.group({
      title: '',
      year: ''
    });

    constructor()
    {
      this.pushMessage("UI:[movieinput.ctr] Triggered.");
    }

    /*postMessageOccurred(message: string)
    {
      this.pushMessage(message ?? "Event Handled.");
    }*/

    pushMessage(message:string)
    {
      this.messagesService.pushMessage(message);
    }

    clickSave()
    {
      let movie = { title: this.moviesForm.value.title!.toString(), year: this.moviesForm.value.year!.toString() };
      let movieStg = JSON.stringify(movie);
      this.pushMessage("UI:[movieinput.clickSave] Triggered. Movie=" + movieStg.toString());

      // todo: send test data for testing
      this.cMovie.add(movie);
    }
}
