import { Component } from '@angular/core';
import { RandomQuoteService } from '../services/random-quote.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private randomQuote: RandomQuoteService){}
  title = 'Random Quote Generator !!';

  getData () {
    return this.randomQuote.getQuote()
  }
}
