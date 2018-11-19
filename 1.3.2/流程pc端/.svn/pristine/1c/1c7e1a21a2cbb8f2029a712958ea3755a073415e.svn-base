import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() options;
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
