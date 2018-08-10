import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT, MissingTranslationStrategy } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
/*
Importing the appropriate language translation file as a string constant.
Creating corresponding translation providers for the JIT compiler.
Bootstrapping the app with those providers.

*/
// use the require method provided by webpack
declare const require;
// we use the webpack raw-loader to return the content as a string
const translations = require(`raw-loader!./locale/messages.fr.xlf`);

platformBrowserDynamic().bootstrapModule(AppModule, { // here controls if the translation to French is on or not
  missingTranslation: MissingTranslationStrategy.Error,
  providers: [
    {provide: TRANSLATIONS, useValue: translations},
    {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'}
  ]
});
