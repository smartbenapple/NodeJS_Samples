import {Component, Input} from '@angular/core';

@Component({
  selector: 'boot-cont3clms',
  templateUrl: './bCont3Clms.html',
  styleUrl: './bCont3Clms.css'
})
export class BootContainer3ClmsComponent
{
  Array:{"Title":string, "Year":string}[] = [];
  RowThree:string = "I'm Row#3";

  // https://angular.io/guide/component-interaction
  @Input()
  set pArray(array: {"Title":string, "Year":string}[])
  {
    this.Array = array;
  }
}
