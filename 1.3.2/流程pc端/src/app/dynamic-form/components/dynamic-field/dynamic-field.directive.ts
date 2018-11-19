import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import { FormButtonComponent } from '../form-button/form-button.component';
import { FormTextareaComponent } from '../form-textarea/form-textarea.component';
import { FormRadioComponent } from '../form-radio/form-radio.component';
import { FormTimeComponent } from '../form-time/form-time.component';
import { FormDateTimeComponent } from '../form-date-time/form-date-time.component';
import { FormDaytimeComponent } from './../form-daytime/form-daytime.component';

const components = {
  'button': FormButtonComponent,
  'text': FormInputComponent,
  'tel': FormInputComponent,
  'dropdown': FormSelectComponent,
  'multi-line-text': FormTextareaComponent,
  'radio-buttons': FormRadioComponent,
  'date': FormTimeComponent,
  'hyperlink': FormInputComponent,
  'dateTime': FormDateTimeComponent,
  'dayTime': FormDaytimeComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input()
  config;

  @Input()
  group: FormGroup;

  component;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {
  }
  ngOnInit() {
    let component = components[this.config.type];
    if(!component){
      component= components['text'];
    }
    // if(this.config.id=="appointTime"){
    //   component= components['dateTime'];
    // }
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}
