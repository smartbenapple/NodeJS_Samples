// NG:Popovers
// https://ng-bootstrap.github.io/#/components/popover/examples
import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngb-popover-basic',
  standalone: true,
  imports: [NgbPopoverModule],
  templateUrl: './popover-basic.html',
  host: { class: 'd-block' },
})
export class NgbdPopoverBasic {}
