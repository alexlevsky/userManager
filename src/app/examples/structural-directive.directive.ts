import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})
export class StructuralDirectiveDirective {
  @Input()
  set appStructuralDirective(claimType: any) {
    if (claimType === 'none') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (claimType === 'true') {
      // Add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // Remove template from DOM
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
}
