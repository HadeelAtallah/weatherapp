import { Component, OnInit, OnDestroy } from '@angular/core';
import { Country } from 'src/app/shared/models';
import { CountriesService } from '../service/countries.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
})
export class CountriesComponent implements OnInit, OnDestroy {
  //list of countries to be displayed
  countries: Country[] = [];

  countriesSub?: Subscription;

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    //get countries through service
    this.countriesSub = this.countriesService
      .getCountries()
      .subscribe((data: any) => {
        data.data.forEach((country: any) => {
          this.countries.push(
            new Country(country.country, country.iso2, country.iso3)
          );
        });
      });
  }

  setCountry(country: string) {
    this.countriesService.setSelectedCountry(country);
  }

  ngOnDestroy(): void {
    this.countriesSub?.unsubscribe();
  }
}
