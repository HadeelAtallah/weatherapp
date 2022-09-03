import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) {}

  /**
   * get list of countries
   * @returns list of countries observable
   */
  getWeather(country: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=794ee95e63c5a32aaf88cd813fa2e425`
    );
  }
}
