
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarningComponent } from './warning/warning.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WarningComponent
  ],
  exports: [
    WarningComponent
  ]
})
export class ComponentModule { }
