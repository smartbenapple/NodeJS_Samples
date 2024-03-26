import { __decorate } from "tslib";
// NG:OffCanvas-Bottom
// https://ng-bootstrap.github.io/#/components/offcanvas/examples
import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
let NgbdOffcanvasBottom = class NgbdOffcanvasBottom {
    constructor() {
        this.offcanvasService = inject(NgbOffcanvas);
    }
    openBottom(content = this.customContent) {
        this.offcanvasService.open(content, { position: 'bottom' });
    }
};
__decorate([
    Input()
], NgbdOffcanvasBottom.prototype, "customContent", void 0);
NgbdOffcanvasBottom = __decorate([
    Component({
        selector: 'ngb-offcanvas-bottom',
        standalone: true,
        templateUrl: './offcanvas-bottom.html',
        encapsulation: ViewEncapsulation.None,
    })
], NgbdOffcanvasBottom);
export { NgbdOffcanvasBottom };
//# sourceMappingURL=offcanvas-bottom.js.map