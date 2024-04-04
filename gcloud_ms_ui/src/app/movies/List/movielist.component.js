import { __decorate } from "tslib";
import { Component, inject } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Events } from '../../events/EventEmitter';
import { MessagesService } from "../../messages/messages.service";
let MovieListComponent = class MovieListComponent {
    constructor() {
        this.title = 'My Movie List';
        // Movies
        // todo: why type is unknown?
        this.movies = [{ "title": "Bambi", "year": "1965" }, { "title": "Iron Man", "year": "2008" }];
        // Concern: Messaging Service
        this.messageService = inject(MessagesService);
        // Success: testing injectable class.
        const cMovie = inject(MoviesService);
        // @ts-ignore
        const moviesArray = cMovie.movies;
        this.movies = moviesArray;
        // Tie to EventEmitter
        const functionCallback2 = (mv) => this.reloadMoviesOccurred(cMovie);
        cMovie.EventGetAllCompleted.on(cMovie.EventName, functionCallback2);
    }
    testEventsHere() {
        const functionCallback = (msg) => this.messageService.pushMessage("SetTimeout triggered...  Calling Emit on Custom-Event.");
        // todo: test custom version
        const events = new Events();
        events.on("MyEvent", functionCallback);
        setTimeout(() => {
            //this.messageService.pushMessage("SetTimeout triggered...  Calling Emit on Custom-Event.");
            events.emit("MyEvent");
        }, 2500);
    }
    reloadMoviesOccurred(movieClass) {
        this.messageService.pushMessage("Reload Movies Occurred.");
        const items = movieClass.movies;
        this.movies = items;
        this.messageService.outputArray(items);
    }
};
MovieListComponent = __decorate([
    Component({
        selector: 'app-movies',
        templateUrl: './movielist.component.html',
        styleUrl: './movielist.component.css'
    })
], MovieListComponent);
export { MovieListComponent };
//# sourceMappingURL=movielist.component.js.map