import { __decorate } from "tslib";
// NG:Popovers
// https://ng-bootstrap.github.io/#/components/popover/examples
import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
let NgbdPopoverBasic = class NgbdPopoverBasic {
};
NgbdPopoverBasic = __decorate([
    Component({
        selector: 'ngb-popover-basic',
        standalone: true,
        imports: [NgbPopoverModule],
        templateUrl: './popover-basic.html',
        host: { class: 'd-block' },
    })
], NgbdPopoverBasic);
export { NgbdPopoverBasic };
//# sourceMappingURL=popover-basic.js.map