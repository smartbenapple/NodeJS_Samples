import { __decorate } from "tslib";
// NG:ProgressBar
// https://ng-bootstrap.github.io/#/components/progressbar/examples
import { Component } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
let NgbdProgressbarBasic = class NgbdProgressbarBasic {
    constructor() {
        this.value = 25;
        this.runProgress();
    }
    async runProgress() {
        let handler = () => { this.value += 1; };
        for (let i = 0; i < 100; i++) {
            //setTimeout(handler,250);
            this.value += 1;
        }
    }
};
NgbdProgressbarBasic = __decorate([
    Component({
        selector: 'ngb-progressbar-basic',
        standalone: true,
        imports: [NgbProgressbarModule],
        templateUrl: './progressbar-basic.html',
    })
], NgbdProgressbarBasic);
export { NgbdProgressbarBasic };
//# sourceMappingURL=progressbar-basic.js.map