import { Directive, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[appInputNgModel]'
})
export class InputNgModelDirective {

  value;
  @Output() textChange=new EventEmitter();
  @Input() 
  get obj(){
    return this.value;
  };
  set obj(val){
    this.value=val;
    this.textChange.emit(this.value);
  }

  constructor() { }

}
