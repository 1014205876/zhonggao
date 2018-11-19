import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { DeepCopyService } from '../../service/deep-copy.service';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  tr;

  newtrs;

  @Input() 
  get trs(){
    return this.newtrs;
  };
  set trs(val){
    this.newtrs=val;
    this.trsChange.emit(this.trs);
  }

  @Output() trsChange=new EventEmitter();

  constructor(private deepCopy:DeepCopyService) { }

  ngOnInit() {
    this.tr=this.deepCopy.copyArr(this.trs[this.trs.length-1]);
  }

  hasKeyDown(){
    this.trsChange.emit(this.trs);
  }

  add(){
    this.trs.push(this.deepCopy.copyArr(this.tr));
  }

  delete(i){
    this.trs.splice(i,1);
    this.hasKeyDown();
  }

}
