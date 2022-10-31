import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CostsRoutingModule} from './costs-routing.module';
import {CostsComponent} from './containers/costs.component';
import {CurrencyComponent} from './components/currency/currency.component';
import {FormsModule} from "@angular/forms";
import {CategoryComponent} from './components/category/category.component';
import {CategoryItemComponent} from './components/category-item/category-item.component';
import {CurrencyAmountComponent} from './components/currency-amount/currency-amount.component';
import {CommentComponent} from './components/comment/comment.component';

@NgModule({
  declarations: [CostsComponent, CurrencyComponent, CategoryComponent, CategoryItemComponent, CurrencyAmountComponent, CommentComponent],
  imports: [
    CommonModule,
    CostsRoutingModule,
    FormsModule
  ]
})
export class CostsModule {
}
