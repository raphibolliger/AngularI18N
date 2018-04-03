# Angular localization with i18n
Demo project for Angular localization with i18n. Clone this project and install all dependencies for a working playgorund.
Visit the live demo at https://raphibolliger.github.io/AngularI18N/

# Localizing workflow

## Mark elements

Place the angular i18n attribute on every element wich should be translated.
```html
<h5 class="card-title" i18n>Angular i18n localization</h5>
```
```html
<p class="card-text" i18n>Hi, {{userName}}</p>
```

## Extract translation file
Use the CLI command
`ng xi18n --i18nFormat=xlf2 --outputPath=src/locale --outFile=messages.xlf´ to extract all marked elements to a translation file.
Send this to your translator or import it to a translation service.