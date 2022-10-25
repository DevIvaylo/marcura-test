import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {BaseCurrency, Costs, ExchangeRates} from "../../models";

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss']
})
export class CostsComponent {
  data$: Subscription;
  costs: Costs;
  exchangeRates: ExchangeRates;
  baseCurrency: BaseCurrency;
  selectedCurrency = {currency: '', exchangeRate: 0};

  constructor(private activatedRoute: ActivatedRoute) {
    this.data$ = this.activatedRoute.data.subscribe(data => {
      this.costs = data.costs;
      this.exchangeRates = data.exchangeRates;
      this.baseCurrency = this.costs.baseCurrency;
      const currency = this.costs.daCurrency.currency;
      const exchangeRate = this.exchangeRates.paymentCurrencies
        .find(pCurrency => pCurrency.toCurrency === currency)!.exchangeRate;
      this.selectedCurrency = {
        currency,
        exchangeRate
      };
    });
  }

  onCurrencyChange(selectedCurrency: string) {
    const exchangeRate = this.exchangeRates.paymentCurrencies
      .find(pCurrency => pCurrency.toCurrency === selectedCurrency)!.exchangeRate;
    this.selectedCurrency = {
      currency: selectedCurrency,
      exchangeRate
    };
  }

  ngOnDestroy(): void {
    this.data$.unsubscribe();
  }
}
