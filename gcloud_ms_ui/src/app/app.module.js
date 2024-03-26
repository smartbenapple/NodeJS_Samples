import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieListComponent } from "./movies/List/movielist.component";
import { BootContainer3ClmsComponent } from "./Bootstrap/bCont3Clms/bCont3Clms";
import { BootContainerClmPartsComponent } from "./Bootstrap/bContClmParts/bContClmParts";
import { NgbdPopoverBasic } from "./Bootstrap/popovers/popover-basic";
import { NgbdProgressbarBasic } from "./Bootstrap/progressbar/progressbar-basic";
import { NgbdOffcanvasBottom } from "./Bootstrap/offCanvas/offcanvas-bottom";
import { MovieInputComponent } from "./movies/Input/movieinput.component";
import { NavBarComponent } from "./NavBar/navbar.component";
import { MessagesComponent } from "./messages/messages.component";
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            ReactiveFormsModule,
            RouterModule.forRoot([
                { path: '', redirectTo: '/list', pathMatch: 'full' },
                { path: 'list', component: MovieListComponent },
                { path: 'add', component: MovieInputComponent },
            ]),
            NgbdPopoverBasic,
            NgbdProgressbarBasic,
            NgbdOffcanvasBottom,
            NavBarComponent,
            FormsModule
        ],
        declarations: [
            AppComponent,
            MovieListComponent,
            MovieInputComponent,
            MessagesComponent,
            BootContainer3ClmsComponent,
            BootContainerClmPartsComponent,
        ],
        bootstrap: [
            AppComponent
        ]
    })
], AppModule);
export { AppModule };
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
//# sourceMappingURL=app.module.js.map