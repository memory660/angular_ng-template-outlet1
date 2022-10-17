import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appElement]',
})
export class ElementDirective {
  @Input() set appElement(value: boolean) {
    value ? this.transform() : this.reverse();
  }

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement);
  }

  private transform(): void {
    const nativeElement: HTMLElement = this.el.nativeElement;
    nativeElement.style.width = '200px';
    nativeElement.style.height = '200px';
    nativeElement.style.backgroundColor = 'green';
    nativeElement.style.color = 'white';
    nativeElement.style.display = 'flex';
    nativeElement.style.alignItems = 'center';
    nativeElement.style.justifyContent = 'center';
    nativeElement.innerHTML = 'Pick-a-Boo!';
  }

  private reverse(): void {
    const nativeElement: HTMLElement = this.el.nativeElement;
    nativeElement.style.width = 'fit-content';
    nativeElement.style.height = 'fit-content';
    nativeElement.style.backgroundColor = 'orange';
    nativeElement.style.color = 'black';
    nativeElement.style.display = 'block';
    nativeElement.innerHTML = 'Hello World!';
  }
}
