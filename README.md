[//]: # (ng build --aot --prod --op docs/en  --base-href=/AngularI18N/en/)
[//]: # (ng build --aot --prod --i18nFile=src/locale/messages.de.xlf --i18nFormat=xlf --locale=de-CH --op docs/de  --base-href=/AngularI18N/de/)
[//]: # (ng build --aot --prod --locale=it --op docs/fr  --base-href=/AngularI18N/fr/)
[//]: # (ng build --aot --prod --locale=it --op docs/it  --base-href=/AngularI18N/it/)

# Angular localization with i18n
Demo project for Angular localization with i18n. Clone this project and install all dependencies for a working playgorund.
Visit the live demo at https://raphibolliger.github.io/AngularI18N/

# Localizing workflow

## Mark elements use pipes

Place the angular i18n attribute on every element which should be translated.
```html
<h5 class="card-title" i18n>Angular i18n localization</h5>
```
```html
<p class="card-text" i18n>Hi, {{userName}}</p>
```
Your html template files will represent the base langauge of the application.

To localize dates, numbers, percentages and currencies use the built in pipes from angular.
```html
<p class="card-text">{{ now | date:'fullDate' }}</p>
```

Detailed information of all pipes are available at the official angular documentation

- Dates: https://angular.io/api/common/DatePipe
- Numbers: https://angular.io/api/common/DecimalPipe
- Percentages: https://angular.io/api/common/PercentPipe
- Currencies: https://angular.io/api/common/CurrencyPipe

## Extract translation file
Use the CLI command
```
ng xi18n --i18nFormat=xlf --outputPath=src/locale --outFile=messages.xlf
```
to extract all marked elements to a translation file.
Send this to your translator or import it to a translation service.

I used the online service [OneSky](https://www.oneskyapp.com/) to translate my `.xlf` files.

## Add translation file
After translation add a new file for each language to the `locale` folder.
There is no need for a naming convention, you have to specify each file for a build in the requested language.

## Build app with language file and location
Build your app separatly for each language.  
Use the following CLI command to build your app in the base language and locale (en-US)
```
ng build --aot --op dist/en
```

Use the following CLI command to build your app in a specific language and locale
```
ng build --aot --i18nFile=src/locale/messages.de.xlf --i18nFormat=xlf --locale=de-CH --op dist/de
```

It is possible to build your app with the same language files for different locales.  
You could build e.g. a `de-DE`, `de-CH` and `de-AT` version with the same language file.

`--aot` marks the build as AOT (Ahed of time).
It's also possible to build your application as JIT (Just in time) the brower will build the application before bootstrap.
If you will use i18n translation with JIT compilation you have to define some additional imports and options in `app.module.ts`.

### Serve while development
tbd

## Deploy

You need a routing or redirecting logic on your server to serve the right langauge version of your app.  
The live demo use different sub-direcotries to serve a different langauge.

# Documentation and help
A complete guide and more examples for i18n can be found at the official angular documentation  
https://angular.io/guide/i18n