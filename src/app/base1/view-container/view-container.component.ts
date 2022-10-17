import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { SomeComponent } from './some/some.component';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss']
})
export class ViewContainerComponent {
  @ViewChild('myContainer', { read: ViewContainerRef, static: true }) myContainer!: ViewContainerRef;
  @ViewChild('anotherContainer', { read: ViewContainerRef, static: true }) anotherContainer!: ViewContainerRef;

  create(): void {
    this.myContainer.createComponent<SomeComponent>(SomeComponent);
    this.anotherContainer.createComponent(SomeComponent);
  }
}
