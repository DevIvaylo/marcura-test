import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExchangeRates} from "../models";

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {
  url = '../assets';

  constructor(private http: HttpClient) {
  }

  getExchangeRates(): Observable<ExchangeRates> {
    return this.http.get<ExchangeRates>(`${this.url}/exchange-rates.json`);
  }
}
