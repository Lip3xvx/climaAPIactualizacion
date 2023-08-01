import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherVistaComponent } from './weather-vista.component';

describe('WeatherVistaComponent', () => {
  let component: WeatherVistaComponent;
  let fixture: ComponentFixture<WeatherVistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherVistaComponent]
    });
    fixture = TestBed.createComponent(WeatherVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
