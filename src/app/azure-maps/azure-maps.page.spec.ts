import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureMapsPage } from './azure-maps.page';

describe('AzureMapsPage', () => {
  let component: AzureMapsPage;
  let fixture: ComponentFixture<AzureMapsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzureMapsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureMapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
