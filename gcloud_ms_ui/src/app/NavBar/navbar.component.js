import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe, NgForOf } from "@angular/common";
import { RouterLink } from "@angular/router";
let NavBarComponent = class NavBarComponent {
    constructor(route) {
        this.route = route;
        this.active = 1;
        this.links = [
            { title: 'Add', fragment: '#', path: "/add" },
            { title: 'Movies', fragment: '#', path: "/list" }
        ];
    }
    clickAddNav() {
        console.log("UI:[navbar.clickAddNav] Triggered.");
        window.location.replace("/addmovie");
    }
};
NavBarComponent = __decorate([
    Component({
        selector: 'nav-bar',
        standalone: true,
        templateUrl: './navbar.component.html',
        styleUrl: './navbar.component.css',
        imports: [NgbNavModule, AsyncPipe, RouterLink, NgForOf],
    })
], NavBarComponent);
export { NavBarComponent };
//# sourceMappingURL=navbar.component.js.map