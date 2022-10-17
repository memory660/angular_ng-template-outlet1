import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-template',
  templateUrl: './if-template.component.html',
  styleUrls: ['./if-template.component.scss']
})
export class IfTemplateComponent implements OnInit {

  links = [
    { internal: true, display: "Home", url: "/" },
    { internal: false, display: "External", url: "https://google.fr" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
