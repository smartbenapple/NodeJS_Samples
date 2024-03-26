// NG:ProgressBar
// https://ng-bootstrap.github.io/#/components/progressbar/examples
import { Component } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngb-progressbar-basic',
  standalone: true,
  imports: [NgbProgressbarModule],
  templateUrl: './progressbar-basic.html',
})
export class NgbdProgressbarBasic
{
  value:number = 25;

  constructor()
  {
    this.runProgress();
  }

  async runProgress()
  {
    let handler = () => { this.value+=1; };
    for (let i = 0; i < 100; i++)
    {
      //setTimeout(handler,250);
      this.value+=1;
    }
  }
}
