import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../countries/service/countries.service';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private countriesService: CountriesService
  ) {}

  weatherData = [];

  ngOnInit() {
    this.weatherService
      .getWeather(this.countriesService.getSelectedCountry())
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
