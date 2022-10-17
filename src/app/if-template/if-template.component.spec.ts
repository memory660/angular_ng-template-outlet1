import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfTemplateComponent } from './if-template.component';

describe('IfTemplateComponent', () => {
  let component: IfTemplateComponent;
  let fixture: ComponentFixture<IfTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
