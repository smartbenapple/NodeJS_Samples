import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieListComponent } from "./movies/movielist.component";
import { BootContainer3ClmsComponent } from "./Bootstrap/bCont3Clms/bCont3Clms";
import { BootContainerClmPartsComponent } from "./Bootstrap/bContClmParts/bContClmParts";
import { NgbdPopoverBasic } from "./Bootstrap/popovers/popover-basic";
import { NgbdProgressbarBasic } from "./Bootstrap/progressbar/progressbar-basic";
import { NgbdOffcanvasBottom } from "./Bootstrap/offCanvas/offcanvas-bottom";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: MovieListComponent},
    ]),
    NgbdPopoverBasic,
    NgbdProgressbarBasic,
    NgbdOffcanvasBottom
  ],
  declarations: [
    AppComponent,
    MovieListComponent,
    BootContainer3ClmsComponent,
    BootContainerClmPartsComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
