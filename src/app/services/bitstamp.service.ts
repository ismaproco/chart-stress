import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { TimeInterval } from './bitstamp.service.enums';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BitstampService {

  constructor(private http: Http) { }
  ApiUrl = `https://www.bitstamp.net/api/v2`; 

  getTransactions( _timeInterval: TimeInterval = TimeInterval.day): Observable<any> {
    let time = TimeInterval[_timeInterval];
    let url = `${this.ApiUrl}/transactions/btcusd/?time=${time}`;
    
    return this.http.get(url)
      .map( r => r.json())
  }  


}
