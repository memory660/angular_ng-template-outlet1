import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.scss']
})
export class DynamicTemplateComponent implements OnInit {
  menu = [
    {
      id: 1,
      label: 'Angular',
      url: 'https://angular.io/',
    },
    {
      id: 2,
      label: 'Vue',
      url: 'https://vuejs.org/',
    },
  ];

  list = ['item 1', 'item 2'];
  default = true;

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem() {
    const index = this.list.length + 1;
    this.list.push(`item ${index}`);
  }
}
