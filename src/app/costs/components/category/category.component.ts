import {Component, Input} from '@angular/core';
import {BaseCurrency, Cost, CostItem, Types} from "../../../models";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  totalQuotedAmount: number;
  totalScreenedAmount: number;
  private _category: Cost;
  @Input() baseCurrency: BaseCurrency;
  @Input() selectedCurrency: BaseCurrency;

  @Input() set category(_category: Cost) {
    this._category = _category;
    this.totalQuotedAmount = this.getTotalAmountByPaymentType(this._category.costItems, Types.Quoted);
    this.totalScreenedAmount = this.getTotalAmountByPaymentType(this._category.costItems, Types.Screened);
  }

  get category() {
    return this._category;
  }

  onScreenedAmountChange(event: number, item: CostItem) {
    const category = this._category.costItems
      .find(costItem => costItem.id === item.id)?.costs.find(cost => cost.type === Types.Screened);
    category!.amount = event;
    this.totalScreenedAmount = this.getTotalAmountByPaymentType(this._category.costItems, Types.Screened);
  }

  getTotalAmountByPaymentType(items: CostItem[], paymentType: Types) {
    return items
      .map(costItem => costItem.costs)
      .reduce((acc, curVal) => [...acc, ...curVal], [])
      .filter(cost => cost.type === paymentType)
      .reduce((acc, curVal) => acc + curVal.amount, 0);
  };
}
