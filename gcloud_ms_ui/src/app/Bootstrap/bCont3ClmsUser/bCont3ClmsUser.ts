import {Component, inject, Input} from '@angular/core';

@Component({
  selector: 'boot-cont3clms-user',
  templateUrl: './bCont3ClmsUser.html',
  styleUrl: './bCont3ClmsUser.css'
})
export class BootCtr3ClmsUserComp
{
  Array:{"username":string, "password":string}[] = [];
  RowThree:string = "I'm Row#3";

  // https://angular.io/guide/component-interaction
  @Input()
  set pArray(array: {"username":string, "password":string}[])
  {
    this.Array = array;
  }
}
