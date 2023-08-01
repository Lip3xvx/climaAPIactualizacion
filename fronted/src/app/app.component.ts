import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from "./weather-data.interface";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsService } from './services/clients-sevice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weather: WeatherData | undefined;
  form: FormGroup = new FormGroup({});
  message: string = "";

  constructor(
    private weatherService: WeatherService,
    private formB: FormBuilder,
    private clients: ClientsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.weatherService.getWeather('bogota', 'co').subscribe(
      res => console.log(res),
      err => console.log(err)
    );

    this.form = this.formB.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
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

  submitLocation(cityNameInput: HTMLInputElement, countryCodeInput: HTMLInputElement) {
    const cityName = cityNameInput.value;
    const countryCode = countryCodeInput.value;
    if (cityName && countryCode) {
      this.getWeather(cityName, countryCode);
    } else {
      alert('Please insert some values');
    }
    cityNameInput.focus();
    return false;
  }

  onSubmit() {
    if (!this.form.valid) {
      this.message = "Warning";
    } else {
      this.clients.postRequest("http://localhost:10101/register", {
        name: this.form.value.name,
        email: this.form.value.email,
        password: this.form.value.password
      }).subscribe(
        (response) => {
          // Handle successful response if needed
          // For example, navigate to another page after successful registration
          this.router.navigate(['/login']);
        },
        (error) => {
          // Handle error if needed
          console.error(error);
        }
      );
    }
  }
}
