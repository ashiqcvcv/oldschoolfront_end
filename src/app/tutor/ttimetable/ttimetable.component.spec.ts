import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtimetableComponent } from './ttimetable.component';

describe('TtimetableComponent', () => {
  let component: TtimetableComponent;
  let fixture: ComponentFixture<TtimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
