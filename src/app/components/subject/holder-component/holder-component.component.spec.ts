import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolderComponentComponent } from './holder-component.component';

describe('HolderComponentComponent', () => {
  let component: HolderComponentComponent;
  let fixture: ComponentFixture<HolderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
