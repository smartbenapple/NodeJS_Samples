import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let BootContainer3ClmsComponent = class BootContainer3ClmsComponent {
    constructor() {
        this.Array = [];
        this.RowThree = "I'm Row#3";
    }
    // https://angular.io/guide/component-interaction
    set pArray(array) {
        this.Array = array;
    }
};
__decorate([
    Input()
], BootContainer3ClmsComponent.prototype, "pArray", null);
BootContainer3ClmsComponent = __decorate([
    Component({
        selector: 'boot-cont3clms',
        templateUrl: './bCont3Clms.html',
        styleUrl: './bCont3Clms.css'
    })
], BootContainer3ClmsComponent);
export { BootContainer3ClmsComponent };
//# sourceMappingURL=bCont3Clms.js.map