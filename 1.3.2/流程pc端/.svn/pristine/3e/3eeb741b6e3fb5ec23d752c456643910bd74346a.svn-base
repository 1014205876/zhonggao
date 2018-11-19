

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';
import { FormTimeComponent } from './components/form-time/form-time.component';
import { LinkComponent } from './components/link/link.component';
import { FormDateTimeComponent } from './components/form-date-time/form-date-time.component';
import { FormDaytimeComponent } from './components/form-daytime/form-daytime.component';

import { ComponentModule } from './../shared/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ComponentModule
  ],
  declarations: [
    DynamicFormComponent, 
    FormInputComponent, 
    FormSelectComponent, 
    FormButtonComponent, 
    DynamicFieldDirective, 
    FormTextareaComponent, 
    FormRadioComponent, 
    FormTimeComponent, 
    LinkComponent, 
    FormDateTimeComponent,
    FormDaytimeComponent
  ],
  entryComponents: [
    FormInputComponent, 
    FormSelectComponent,
    FormButtonComponent,
    FormTextareaComponent,
    FormRadioComponent,
    FormTimeComponent,
    FormDateTimeComponent,
    FormDaytimeComponent
  ],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule { }
