import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/shared/models';
import { CountriesService } from '../service/countries.service';

@Component({
  selector: 'app-countries',
  template: `
    <div class="w-full h-full border border-gray-400 rounded-sm p-4"></div>
  `,
})
export class CountriesComponent implements OnInit {
  //list of countries to be displayed
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    //get countries through service map data get names and iso codes
    this.countriesService.getCountries().subscribe((data: any) => {
      data.data.forEach((country: Country) => {
        this.countries.push(country);
      });
    });
  }
}
