import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './features/app.component';
import { RandomQuoteService } from './services/random-quote.service';
import { HttpModule } from '@angular/http'
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [RandomQuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
