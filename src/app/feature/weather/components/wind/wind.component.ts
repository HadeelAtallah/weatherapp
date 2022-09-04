import { Component, Input } from '@angular/core';
import { Wind } from 'src/app/shared/models/weather';

@Component({
  selector: 'app-wind-card',
  template: ` <div
    class="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    *ngIf="data"
  >
    <div class="flex justify-between items-center mb-4">
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Wind
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
                Wind Speed: {{ data.speed }} {{ metric ? 'm/s' : 'miles/hour' }}
              </p>
              <p
                class="text-sm font-medium text-gray-900 truncate dark:text-white"
              >
                Wind direction: {{ data.deg }}
                {{ metric ? 'C' : 'F' }}
              </p>
              <p
                class="text-sm font-medium text-gray-900 truncate dark:text-white"
              >
                Wind gust: {{ data.gust }}
                {{ metric ? 'm/s' : 'miles/hour' }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>`,
})
export class WindComponent {
  data!: Wind;
  metric = false;

  //units setter
  @Input() set units(unit: boolean) {
    this.metric = unit;
  }

  //data setter
  @Input() set windData(data: any) {
    if (data) {
      let main = data.wind;
      this.data = new Wind(main.speed, main.deg, main.gust);
    }
  }
}
