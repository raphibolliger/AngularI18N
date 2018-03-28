import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
      CommonModule
  ],
  exports: [
      NavComponent
  ],
  providers: []
})

export class NavModule { }