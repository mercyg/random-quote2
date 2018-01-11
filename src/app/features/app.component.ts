import { Component } from '@angular/core';
import { RandomQuoteService } from '../services/random-quote.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataToDisplay: any = []; 
  constructor(private randomQuote: RandomQuoteService){}

  ngOnInit() {

  }

  getData () {
    this.randomQuote.getQuote().subscribe(data => {
       this.dataToDisplay = data;
    });
  }
}
