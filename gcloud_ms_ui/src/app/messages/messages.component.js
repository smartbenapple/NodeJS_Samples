import { __decorate } from "tslib";
import { Component, inject } from "@angular/core";
import { MessagesService } from './messages.service';
let MessagesComponent = class MessagesComponent {
    get messages() {
        return this.messageService.messages;
    }
    constructor() {
        this.messageService = inject(MessagesService);
        this.messageService.pushMessage("UI:[messages.component] Ctr.");
    }
};
MessagesComponent = __decorate([
    Component({
        selector: 'app-messages',
        templateUrl: './messages.component.html',
        styleUrl: './messages.component.css'
    })
], MessagesComponent);
export { MessagesComponent };
//# sourceMappingURL=messages.component.js.map