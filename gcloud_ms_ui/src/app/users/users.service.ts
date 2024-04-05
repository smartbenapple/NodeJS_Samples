import {inject, Injectable} from "@angular/core";
import {MessagesService} from "../messages/messages.service";
import * as $ from "jquery";
import {Events} from "../events/EventEmitter";

interface IUser
{
  username:string,
  password: string,
}

const url = 'https://gcloud-ms-api-front-axxh6chama-wl.a.run.app/users'; // locally: http://localhost:8181/users

@Injectable({
  providedIn: 'root'
})
export class UsersService
{
    // todo: why use any?
    users: any = [{ "username": "Bambi", "password": "ace" }, { "username": "thumper", "password": "base" }];

    // https://www.w3schools.com/nodejs/nodejs_events.asp
    EventName = "GetAllCompleted";
    EventGetAllCompleted = new Events();

    // Concern: Messaging Service
    messagesService = inject(MessagesService);

  constructor()
  {
    this.users = [{ "username": "Bambi", "password": "ace" }, { "username": "thumper", "password": "base" }];
    this.getUsers();
  }

  getUsers()
  {
    this.getUsersAjax().then( (users) =>
    {
      this.users = users;
      this.EventGetAllCompleted.emit(this.EventName);
      this.outputArray(this.users);
    }).catch ((err) =>
    {
      console.log("UI:[users.service.getUsers] Error=" + err);
    });
  }

  async getUsersAjax()
  {
    this.messagesService.pushMessage("UI:[users.service.getUsersAjax] Triggered.");
    return await new Promise((acc, rej) =>
    {
      // Create URL
      let url = "https://gcloud-ms-api-front-axxh6chama-wl.a.run.app/users";

      // Set $ for JQuery access in TypeScript => import * as $ from 'jquery';
      // Ref: https://stackoverflow.com/questions/30623825/how-to-use-jquery-with-angular
      $.ajax({
        url: url,
        type: "GET",
        dataType: 'json', // what you expect back from server
        crossDomain: true, // todo: test
        success: function (result) {
          console.log("UI:[getData.GetUsersAjax] Users Count=" + result.length);
          // trigger accept
          acc(result);
        },
        error: function (error) {
          console.log('UI:[getData.GetUsersAjax] Server Error: Maybe Unreachable.' + error);
          // trigger reject.
          rej(error);
        }
      }); // end $.ajax
    }); // end Promise()
  }

  outputArray(array:{username:string,password:string}[])
  {
    //this._postMsgCallback("OutputArray Triggered.");
    for (let index in array)
    {
      let user = array[index];
      this.messagesService.pushMessage(user.username);
    }
  }
}
