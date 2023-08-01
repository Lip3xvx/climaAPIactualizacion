import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData  } from '../../weather-data.interface'


@Component({
  selector: 'app-weather-vista',
  templateUrl: './weather-vista.component.html',
  styleUrls: ['./weather-vista.component.css']
})
export class WeatherVistaComponent implements OnInit{
  weather: WeatherData  | undefined;
   title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private weatherService: WeatherService){

  }

  ngOnInit(){
    this.weatherService.getWeather('bogota', 'co').subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode).subscribe(
      (res: WeatherData) => {
        console.log(res);
        this.weather = res;
      },
      err => console.log(err)
    );
  }
  

  submitLocation(cityNameInput: HTMLInputElement, CountryCodeInput: HTMLInputElement){
    const cityName = cityNameInput.value
    const CountryCode = CountryCodeInput.value
    if (cityName && CountryCode) {
      this.getWeather(cityName, CountryCode)
    } else {
      alert('Please. Insert some values')
    }
cityNameInput.focus();
return false
  }
}

