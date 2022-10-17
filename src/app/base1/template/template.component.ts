import { ViewContainerRef } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  @ViewChild('myContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  @ViewChild('myTemplate', { read: TemplateRef, static: true })
  template!: TemplateRef<any>

  embed(): void {
    this.container.createEmbeddedView(this.template);
  }
}
