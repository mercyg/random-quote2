import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RandomQuoteService{

  constructor(private http: Http) { }

  private finalUrl = `http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en`


  getQuote(): Observable <any> {
        let getQuotes =  this.http.get(this.finalUrl)
                .map((res: Response) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server Error'))
                console.log('This is api data: ' + getQuotes)
                return getQuotes
  }

}
