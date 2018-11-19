import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  value;
  @Output() textChange=new EventEmitter();
  @Input() 
  get obj(){
    return this.value;
  };
  set obj(val){
    this.value=val;
    this.textChange.emit(this.obj);
  }

  @Input() reg;
  
  @Input() placeholder;

  constructor() { }

  ngOnInit() {
  }

}
