import { Base1Module } from './base1/base1.module';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from "./components/card/card.component";
import { ListComponent } from "./components/list/list.component";
import { DirectiveConditionnalComponent } from "./directive-conditionnal/directive-conditionnal.component";
import { MyDirective1Directive } from "./directive-conditionnal/my-directive1.directive";
import { MySelectorComponent } from "./custom-dropdown/my-selector/my-selector.component";
import { Client1Component } from "./custom-dropdown/client1/client1.component";
import { Client2Component } from "./custom-dropdown/client2/client2.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IfTemplateComponent } from './if-template/if-template.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    DirectiveConditionnalComponent,
    MyDirective1Directive,
    MySelectorComponent,
    Client1Component,
    Client2Component,
    IfTemplateComponent,


  ],
  imports: [BrowserModule, CommonModule, NoopAnimationsModule, Base1Module, RouterModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
