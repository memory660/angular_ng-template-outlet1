import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;

  open = true;

  constructor() { }

  ngOnInit(): void {
  }

}
