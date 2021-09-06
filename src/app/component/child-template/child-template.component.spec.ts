import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTemplateComponent } from './child-template.component';

describe('ChildTemplateComponent', () => {
  let component: ChildTemplateComponent;
  let fixture: ComponentFixture<ChildTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
