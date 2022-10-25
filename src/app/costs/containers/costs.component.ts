import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss']
})
export class CostsComponent implements OnInit {
  costs: any;
  exchangeRates: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.costs = response.costs;
      this.exchangeRates = response.exchangeRates;
      console.log(this.costs, 'costs fetched');
      console.log(this.exchangeRates, 'exchangeRates fetched');
    });

  }
}
