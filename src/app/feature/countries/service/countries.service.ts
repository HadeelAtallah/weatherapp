import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  countriesApi = environment.countriesApi;
  constructor(private http: HttpClient) {}

  /**
   * get list of countries
   * @returns list of countries observable
   */
  getCountries() {
    return this.http.get(`${this.countriesApi}`);
  }
}
