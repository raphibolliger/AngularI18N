import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string = 'AngularLocalization';
  now: Date = new Date();
  minutes: number = 0;
  gender: string = "o";
  userName: string = "Raphael Bolliger";

  public showWarning(): void {
    // there is no mehtode to translate this string, i18n supports only translation in text files at the moment
    alert("This warning text is always english, there is no possibility to achive a translation in component code.")
  }

}
