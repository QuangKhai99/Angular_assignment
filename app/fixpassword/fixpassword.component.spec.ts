import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixpasswordComponent } from './fixpassword.component';

describe('FixpasswordComponent', () => {
  let component: FixpasswordComponent;
  let fixture: ComponentFixture<FixpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
