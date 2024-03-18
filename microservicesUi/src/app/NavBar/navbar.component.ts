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

  links = [
    { title: 'Add', fragment: '#', path:"/add" },
    { title: 'Movies', fragment: '#', path:"/list" }
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
