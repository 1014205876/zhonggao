import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input()
  config: any[] = [];

  form: FormGroup;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  @Output() callBack = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // 接口联调时，删除代码
    // this.form = this.createGroup();
  }
  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => {
      let valida = [];
      if (control.required) {
        if (control.type == 'radio-buttons' || control.type == 'dropdown') {
          valida.push(this.hasValue);
        }
        if(control.type == 'dayTime'){
          valida.push(this.hasValue);
        }
        if (control.type == 'text' || control.type == 'date' ) {
          valida.push(Validators.required);
        }
      }
      for (let key in control.params) {
        if (key == 'regexPattern') {
          valida.push(Validators.pattern(control.params.regexPattern));
        }
      }
      group.addControl(control.id, this.fb.control('', valida));
    });
    return group;
  }
  hasValue(c: AbstractControl) {
    if (!c.value) {
      return { hasValue: true };
    }
    return null;
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    if (!changes['config'].firstChange) {
      this.form = this.createGroup();
    }
  }

  cal(){
    window.history.back()
    this.callBack.emit();
  }

}
