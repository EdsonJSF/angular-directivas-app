import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]',
})
export class CustomIfDirective {
  @Input() set appCustomIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.tamplateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private tamplateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}
}
