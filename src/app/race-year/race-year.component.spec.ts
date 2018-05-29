import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceYearComponent } from './race-year.component';

describe('RaceYearComponent', () => {
  let component: RaceYearComponent;
  let fixture: ComponentFixture<RaceYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
