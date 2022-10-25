import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Costs} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CostsService {
  url = '../assets';

  constructor(private http: HttpClient) {
  }

  getCosts(): Observable<Costs> {
    return this.http.get<Costs>(`${this.url}/costs.json`);
  }
}
