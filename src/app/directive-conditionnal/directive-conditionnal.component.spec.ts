import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveConditionnalComponent } from './directive-conditionnal.component';

describe('DirectiveConditionnalComponent', () => {
  let component: DirectiveConditionnalComponent;
  let fixture: ComponentFixture<DirectiveConditionnalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveConditionnalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveConditionnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
