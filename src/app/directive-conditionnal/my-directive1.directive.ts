import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appMyDirective1]",
})
export class MyDirective1Directive {
  @Input("appMyDirective1") set options(value: any) {
    this.init(value.apply);
  }

  constructor(public el: ElementRef, public renderer: Renderer2) {}

  init(value: boolean): void {
    console.log(value);
    if (!value) {
      this.renderer.setStyle(this.el.nativeElement, "color", "black");
      return;
    }
    this.renderer.setStyle(this.el.nativeElement, "color", "red");
  }
}
