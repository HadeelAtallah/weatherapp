import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav
      class="flex items-center justify-between flex-wrap bg-teal-600 p-6 w-full"
    >
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Weather App</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            *ngFor="let item of menuItems"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 cursor-pointer"
            [routerLink]="item"
          >
            {{ item }}
          </a>
        </div>
      </div>
    </nav>
  `,
})
export class HeaderComponent {
  constructor() {}

  menuItems = ['Countries'];
}
