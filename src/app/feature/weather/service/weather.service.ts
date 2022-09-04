import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) {}

  /**
   * get weather data
   * @returns observable
   */
  getWeather(country: string, metric: boolean): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=794ee95e63c5a32aaf88cd813fa2e425&units=${
        metric ? 'metric' : 'imperial'
      }`
    );
  }
}
