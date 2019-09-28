import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixPassWordComponent } from './fix-pass-word.component';

describe('FixPassWordComponent', () => {
  let component: FixPassWordComponent;
  let fixture: ComponentFixture<FixPassWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixPassWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixPassWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
