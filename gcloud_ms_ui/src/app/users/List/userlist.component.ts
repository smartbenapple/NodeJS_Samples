import { Component, inject } from "@angular/core";
import { MessagesService } from "../../messages/messages.service";
import { UsersService } from "../users.service";

@Component({
  selector: 'app-users',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserListComponent
{
    title = 'My User List';

    // Users
    // todo: why type is any?
    users: any = [{"username":"Bambi", "password":"ace"},{"username":"thumper", "year":"base"}];

    // Concern: Messaging Service
    private messageService:MessagesService = inject(MessagesService);

    constructor()
    {
        // Success: testing injectable class.
        const cUserSrv = inject(UsersService);

        // @ts-ignore
        const usersArray :[{username:string, password:string}] = cUserSrv.users;
        this.users = usersArray;

        // Tie to EventEmitter
        const functionCallback2 = (us:UsersService) => this.reloadUsersOccurred(cUserSrv);
        cUserSrv.EventGetAllCompleted.on(cUserSrv.EventName, functionCallback2);
    }

    private reloadUsersOccurred(userClass:UsersService)
    {
      this.messageService.pushMessage("Reload Users Occurred.");

      const items = userClass.users;
      this.users = items;
      this.messageService.outputArray(items);
    }
}
