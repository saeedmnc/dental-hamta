import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayPatientsSchedulesComponent } from './today-patients-schedules.component';

describe('TodayPatientsSchedulesComponent', () => {
  let component: TodayPatientsSchedulesComponent;
  let fixture: ComponentFixture<TodayPatientsSchedulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayPatientsSchedulesComponent]
    });
    fixture = TestBed.createComponent(TodayPatientsSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
