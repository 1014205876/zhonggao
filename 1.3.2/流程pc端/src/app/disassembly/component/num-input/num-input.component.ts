import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'num-input',
  templateUrl: './num-input.component.html',
  styleUrls: ['./num-input.component.css']
})
export class NumInputComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
