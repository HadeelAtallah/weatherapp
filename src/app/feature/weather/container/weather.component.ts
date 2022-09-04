import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../countries/service/countries.service';
import { WeatherService } from '../service/weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private countriesService: CountriesService
  ) {}

  weatherData$!: Observable<any>;

  //units
  metric = false;

  ngOnInit() {
    this.getWeatherData();
  }

  //toggle units
  toggleUnits() {
    this.metric = !this.metric;
    this.getWeatherData();
  }

  //get selected country from countries service
  getCountry(): string {
    return this.countriesService.getSelectedCountry();
  }

  //get weather data if a country is selected
  getWeatherData() {
    if (this.getCountry()) {
      this.weatherData$ = this.weatherService.getWeather(
        this.countriesService.getSelectedCountry(),
        this.metric
      );
    }
  }
}
