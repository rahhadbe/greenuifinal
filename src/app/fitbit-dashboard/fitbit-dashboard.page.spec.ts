import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitbitDashboardPage } from './fitbit-dashboard.page';

describe('FitbitDashboardPage', () => {
  let component: FitbitDashboardPage;
  let fixture: ComponentFixture<FitbitDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitbitDashboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitbitDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
