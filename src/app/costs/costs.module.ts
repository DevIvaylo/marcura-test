import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CostsRoutingModule} from './costs-routing.module';
import {CostsComponent} from './containers/costs.component';
import {CurrencyComponent} from './components/currency/currency.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [CostsComponent, CurrencyComponent],
  imports: [
    CommonModule,
    CostsRoutingModule,
    FormsModule
  ]
})
export class CostsModule {
}
