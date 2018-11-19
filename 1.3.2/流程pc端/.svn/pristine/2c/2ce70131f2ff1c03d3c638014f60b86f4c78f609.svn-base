import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input() options;
  @Input() key;
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
