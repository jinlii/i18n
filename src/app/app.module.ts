import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  // Provide this token to set the locale of your application.
  // It is used for i18n extraction, by i18n pipes (DatePipe, I18nPluralPipe, CurrencyPipe, DecimalPipe and PercentPipe) and by ICU expressions.
  providers: [ { provide: LOCALE_ID, useValue: 'fr' } ], // commenting this out is ok actually. it's main.ts bootstrapping that controls if use translation or not
  bootstrap: [ AppComponent ]
})
export class AppModule { }
