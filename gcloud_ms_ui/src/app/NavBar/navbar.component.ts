import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe, NgForOf } from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: 'nav-bar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [NgbNavModule, AsyncPipe, RouterLink, NgForOf],
})
export class NavBarComponent
{
  active = 1;

  // Note: The path:"/[name]" ties to the app.module.ts RouterModule.forRoot() section.
  //       The router module includes array entries to point to angular components.
  links = [
    { title: 'Add', fragment: '#', path:"/madd" },
    { title: 'Movies', fragment: '#', path:"/mlist" },
    { title: 'Users', fragment: '#', path:"/ulist" }
  ];

  constructor(public route: ActivatedRoute)
  {
  }

  clickAddNav()
  {
    console.log("UI:[navbar.clickAddNav] Triggered.");
    window.location.replace("/addmovie");
  }
}
