import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  countriesApi = environment.countriesApi;
  constructor(private http: HttpClient) {}

  //selected country
  selectedCountry = '';

  setSelectedCountry(country: string) {
    this.selectedCountry = country;
  }

  getSelectedCountry() {
    return this.selectedCountry;
  }

  /**
   * get list of countries
   * @returns list of countries observable
   */
  getCountries(): Observable<any> {
    return this.http.get(`${this.countriesApi}`);
  }
}
