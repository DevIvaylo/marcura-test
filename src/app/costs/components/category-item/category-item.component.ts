import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseCurrency, CostItem, Types} from "../../../models";

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent {
  screenedAmount: number;
  quotedAmount: number;
  private _expenseItem: CostItem;
  @Input() selectedCurrency: BaseCurrency;
  @Input() baseCurrency: BaseCurrency;
  @Output() amountChanged = new EventEmitter<number>();

  @Input() set expenseItem(_expenseItem: CostItem) {
    this._expenseItem = _expenseItem;
    this.screenedAmount = this._expenseItem.costs.find(cost => cost.type === Types.Screened)!.amount;
    this.quotedAmount = this._expenseItem.costs.find(cost => cost.type === Types.Quoted)!.amount;
  }

  get expenseItem() {
    return this._expenseItem;
  }

  onScreenedAmountChange(event: number) {
    this.screenedAmount = event;
    this.amountChanged.emit(event);
  }
}
