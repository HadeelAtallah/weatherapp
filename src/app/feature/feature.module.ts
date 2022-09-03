import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountriesComponent } from './countries/container/countries.component';
import { WeatherComponent } from './weather/container/weather.component';
import { CountryCardComponent } from './countries/components/country-card.component';
import { TemperatureComponent } from './weather/components/temperature/temperature.component';
import { WindComponent } from './weather/components/wind/wind.component';
import { WeatherCardComponent } from './weather/components/weather/weather.component';

const routes: Routes = [
  {
    path: 'Countries',
    component: CountriesComponent,
  },
  {
    path: 'Weather',
    component: WeatherComponent,
  },
  { path: '**', component: CountriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule, CommonModule],
  exports: [],
  declarations: [
    CountriesComponent,
    WeatherComponent,
    CountryCardComponent,
    TemperatureComponent,
    WindComponent,
    WeatherCardComponent,
  ],
  providers: [],
})
export class FeatureModule {}
