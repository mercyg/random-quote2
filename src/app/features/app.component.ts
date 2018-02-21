import { Component } from '@angular/core';
import { RandomQuoteService } from '../services/random-quote.service'
import { Quotes } from '../model/quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private randomQuote: RandomQuoteService){}
  quotes = { }
  ngOnInit() {
  }

  getData () {
    this.randomQuote.getQuote().subscribe((data : any[]) => {
       this.quotes = data;
       console.log(this.quotes)
    });
  }
}
