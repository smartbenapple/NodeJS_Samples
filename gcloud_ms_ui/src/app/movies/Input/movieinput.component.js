import { __decorate } from "tslib";
// Angular-Forms: https://angular.io/start/start-forms
//
import { Component, inject } from '@angular/core';
import { MoviesService } from '../movies.service';
import { FormBuilder } from "@angular/forms";
import { MessagesService } from "../../messages/messages.service";
let MovieInputComponent = class MovieInputComponent {
    constructor() {
        // Success: testing injectable class.
        this.cMovie = inject(MoviesService);
        this.messagesService = inject(MessagesService);
        // Concern: Tracks form data from <form>
        this.formBuilder = inject(FormBuilder);
        this.moviesForm = this.formBuilder.group({
            title: '',
            year: ''
        });
        this.pushMessage("UI:[movieinput.ctr] Triggered.");
    }
    /*postMessageOccurred(message: string)
    {
      this.pushMessage(message ?? "Event Handled.");
    }*/
    pushMessage(message) {
        this.messagesService.pushMessage(message);
    }
    clickSave() {
        let movie = { Title: this.moviesForm.value.title.toString(), Year: this.moviesForm.value.year.toString() };
        let movieStg = JSON.stringify(movie);
        this.pushMessage("UI:[movieinput.clickSave] Triggered. Movie=" + movieStg.toString());
        // todo: send test data for testing
        this.cMovie.add(movie);
    }
};
MovieInputComponent = __decorate([
    Component({
        selector: 'movie-input',
        templateUrl: './movieinput.component.html',
        styleUrl: './movieinput.component.css'
    })
], MovieInputComponent);
export { MovieInputComponent };
//# sourceMappingURL=movieinput.component.js.map