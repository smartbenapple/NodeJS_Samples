import { Component, inject } from "@angular/core";
import { MessagesService }  from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent
{
  messageService:MessagesService = inject(MessagesService);

  get messages()
  {
    return this.messageService.messages;
  }

  constructor()
  {
    this.messageService.pushMessage("UI:[messages.component] Ctr.");
  }
}
