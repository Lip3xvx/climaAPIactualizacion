import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { WeatherData } from '../weather-data.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'c4e8e6971d4fd7ad3877d2371adbc358';
  URI: string = '';

  constructor(private httpClient: HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;
  }

  getWeather(cityName: string, countryCode: string): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(`${this.URI}${cityName},${countryCode}`);
  }
}
