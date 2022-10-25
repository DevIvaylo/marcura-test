import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {CostsService} from '../services/costs.service';
import {Costs} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CostsResolver implements Resolve<Costs> {
  constructor(private costsService: CostsService) {
  }

  resolve(): Observable<Costs> {
    return this.costsService.getCosts();
  }
}
