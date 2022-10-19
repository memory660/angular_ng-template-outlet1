import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list-d',
  templateUrl: './list-d.component.html',
  styleUrls: ['./list-d.component.scss']
})
export class ListDComponent implements OnInit {

  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;
  @Input() list: Array<string> = [];
  @Output() itemAdd = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  addMore() {
    this.itemAdd.emit();
  }

  removeItem(index: number) {
    this.list.splice(index, 1);
  }

}
