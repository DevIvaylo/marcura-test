import {Component, Input, Output, EventEmitter} from '@angular/core';
import {PaymentCurrency} from "../../../models";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {
  @Input() initialValue: string;
  @Input() paymentCurrencies: PaymentCurrency[];
  @Output() selectedCurrency = new EventEmitter<string>();

  onCurrencySelect(selectedCurrency: string) {
    this.selectedCurrency.emit(selectedCurrency);
  }
}
