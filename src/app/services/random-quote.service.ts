import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RandomQuoteService{
  constructor(private http: Http) { }
   
  private finalUrl = `https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en`

  getQuote(){
      return this.http.get(this.finalUrl).map(res => res.json())
  }
}
