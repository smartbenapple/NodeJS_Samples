import {Component, inject, Input} from '@angular/core';

@Component({
  selector: 'boot-cont3clms',
  templateUrl: './bCont3Clms.html',
  styleUrl: './bCont3Clms.css'
})
export class BootContainer3ClmsComponent
{
  Array:{"title":string, "year":string}[] = [];
  RowThree:string = "I'm Row#3";

  // https://angular.io/guide/component-interaction
  @Input()
  set pArray(array: {"title":string, "year":string}[])
  {
    this.Array = array;
  }
}
