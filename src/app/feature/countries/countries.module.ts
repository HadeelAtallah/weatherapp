import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountriesComponent } from './container/countries.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [],
  declarations: [CountriesComponent],
  providers: [],
})
export class CountriesModule {}
