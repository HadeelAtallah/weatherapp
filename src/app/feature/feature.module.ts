import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountriesComponent } from './countries/container/countries.component';
import { WeatherComponent } from './weather/container/weather.component';
import { CountryCardComponent } from './countries/components/country-card.component';
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
  declarations: [CountriesComponent, WeatherComponent, CountryCardComponent],
  providers: [],
})
export class FeatureModule {}
