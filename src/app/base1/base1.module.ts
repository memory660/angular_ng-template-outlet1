import { SomeComponent } from './view-container/some/some.component';
import { MaterialModule } from './shared/material.module';
import { ViewContainerComponent } from './view-container/view-container.component';
import { TemplateComponent } from './template/template.component';
import { ElementDirective } from './element/element.directive';
import { ElementComponent } from './element/element.component';
import { ParentComponent } from './parent.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ParentComponent,
    ElementComponent,
    ElementDirective,
    TemplateComponent,
    ViewContainerComponent,
    SomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'element'
      },
      {
        path: 'element',
        component: ElementComponent,
      },
      {
        path: 'template',
        component: TemplateComponent,
      },
      {
        path: 'view-container',
        component: ViewContainerComponent,
      },
    ]),
    FormsModule,
    MaterialModule,
  ],
  exports: [ParentComponent]
})
export class Base1Module { }
