import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailCountryComponent } from './datail-country.component';

describe('DatailCountryComponent', () => {
  let component: DatailCountryComponent;
  let fixture: ComponentFixture<DatailCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatailCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
