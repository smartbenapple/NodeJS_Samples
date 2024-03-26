import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let MessagesService = class MessagesService {
    constructor() {
        // Messages
        this.messages = [""];
    }
    pushMessage(message) {
        this.messages.push(message);
    }
    outputArray(array) {
        //this.pushMessage("OutputArray Triggered.");
        // for() index value is not the direct array item -> https://www.microverse.org/blog/how-to-loop-through-the-array-of-json-objects-in-javascript
        for (let index in array) {
            let movie = array[index];
            this.pushMessage(movie.Title);
        }
    }
    postMessageOccurred(message) {
        this.pushMessage(message ?? "Event Handled.");
    }
};
MessagesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MessagesService);
export { MessagesService };
//# sourceMappingURL=messages.service.js.map