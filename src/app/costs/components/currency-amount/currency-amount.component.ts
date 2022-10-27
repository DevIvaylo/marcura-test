import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {BaseCurrency} from "../../../models";

@Component({
  selector: 'app-currency-amount',
  templateUrl: './currency-amount.component.html',
  styleUrls: ['./currency-amount.component.scss']
})
export class CurrencyAmountComponent implements OnInit {
  initialAmount: number;
  private _selectedCurrency: BaseCurrency;
  @Input() baseCurrency: BaseCurrency;
  @Input() amount: number;
  @Input() isEditable = false;
  @Output() onScreenedAmountChanged = new EventEmitter<number>();

  @Input() set selectedCurrency(_selectedCurrency: any) {
    this._selectedCurrency = _selectedCurrency;
  }

  get selectedCurrency() {
    return this._selectedCurrency;
  }

  ngOnInit() {
    this.initialAmount = this.amount * this.selectedCurrency.exchangeRate.toFixed(2);
  }

  onAmountChange(amount: string) {
    this.onScreenedAmountChanged.emit(parseFloat(amount))
  }
}
