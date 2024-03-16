// NG:OffCanvas-Bottom
// https://ng-bootstrap.github.io/#/components/offcanvas/examples
import {Component, inject, Input, TemplateRef, ViewEncapsulation} from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngb-offcanvas-bottom',
  standalone: true,
  templateUrl: './offcanvas-bottom.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgbdOffcanvasBottom
{
  private offcanvasService = inject(NgbOffcanvas);

  @Input() customContent: TemplateRef<any> | undefined;

  openBottom(content: TemplateRef<any> | undefined = this.customContent)
  {
    this.offcanvasService.open(content, { position: 'bottom' });
  }
}
