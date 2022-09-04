import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/shared/models';

@Component({
  selector: 'app-country-card',
  template: `
    <div class="w-full h-full border border-gray-300 rounded-sm p-3">
      <div class="grid grid-cols-9 gap-12 justify-around">
        <div class="w-auto h-12" *ngFor="let country of countries">
          <a
            class="block p-2 bg-white cursor-pointer active:bg-orange-300 rounded-md border border-gray-200 shadow-md hover:bg-orange-200"
            [ngClass]="{ 'bg-orange-400': selectedCountry === country.name }"
            (click)="setCountry(country.name)"
          >
            <h5 class="mb-2 text-xs font-bold text-gray-900 dark:text-white">
              {{ country.name }}
            </h5>
          </a>
        </div>
      </div>
    </div>
  `,
})
export class CountryCardComponent {
  @Input() countries: Country[] = [];

  @Output() handleSelectedCountry = new EventEmitter<string>();

  //selected country name
  selectedCountry: string = '';

  setCountry(name: string) {
    this.selectedCountry = name;
    this.handleSelectedCountry.emit(this.selectedCountry);
  }
}
