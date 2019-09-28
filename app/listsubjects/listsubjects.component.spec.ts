import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsubjectsComponent } from './listsubjects.component';

describe('ListsubjectsComponent', () => {
  let component: ListsubjectsComponent;
  let fixture: ComponentFixture<ListsubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
