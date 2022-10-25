import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CostsResolver} from './resolvers/costs.resolver';
import {ExchangeRatesResolver} from './resolvers/exchange-rates.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'costs',
    pathMatch: 'full'
  },
  {
    path: 'costs',
    resolve: {
      costs: CostsResolver,
      exchangeRates: ExchangeRatesResolver
    },
    loadChildren: () => import('./costs/costs.module').then(m => m.CostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
