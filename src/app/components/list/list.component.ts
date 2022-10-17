import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from "@angular/core";

@Component({
  selector: "app-list",
  template: `
    <ul class="list">
      <li class="list-item" *ngFor="let item of data">
        <ng-container
          [ngTemplateOutlet]="itemTemplate"
          [ngTemplateOutletContext]="{
            $implicit: item,
            message: 'le message'
          }"
        ></ng-container>
      </li>
    </ul>
  `,
  styleUrls: ["list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() data!: any[];
  @Input() itemTemplate!: TemplateRef<any>;
}
