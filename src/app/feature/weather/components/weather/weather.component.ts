import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/shared/models/weather';

@Component({
  selector: 'app-weather-card',
  template: `
    <div
      class="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      *ngIf="data"
    >
      <div class="flex justify-between items-center mb-4">
        <h5
          class="text-xl font-bold leading-none text-gray-900 dark:text-white"
        >
          {{ data.main }}
        </h5>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0"></div>
              <div class="flex-1 min-w-0">
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-white"
                >
                  {{ data.description }} in {{ activeCountry }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class WeatherCardComponent {
  data!: Weather;
  metric = false;
  activeCountry = '';

  @Input() set country(name: string) {
    this.activeCountry = name;
  }

  //units setter
  @Input() set units(unit: boolean) {
    this.metric = unit;
  }

  //data setter
  @Input() set weatherData(data: any) {
    if (data) {
      let main = data.weather[0];
      this.data = new Weather(main.main, main.description);
    }
  }
}
