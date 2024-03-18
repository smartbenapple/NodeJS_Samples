import { Component } from '@angular/core';

@Component({
  selector: 'movie-input',
  templateUrl: './movieinput.component.html',
  styleUrl: './movieinput.component.css'
})
export class MovieInputComponent
{
    constructor() {
    }

    clickSave()
    {
      console.log("UI:[movieinput.clickSave] Triggered=");
    }
}
