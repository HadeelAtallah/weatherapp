import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Countries',
    loadChildren: () =>
      import('./feature/countries/countries.module').then(
        (path) => path.CountriesModule
      ),
  },

  { path: '', redirectTo: '/Countries', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
