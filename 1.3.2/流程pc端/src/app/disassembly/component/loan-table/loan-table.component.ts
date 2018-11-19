import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DeepCopyService } from '../../service/deep-copy.service';

@Component({
  selector: 'loan-table',
  templateUrl: './loan-table.component.html',
  styleUrls: ['./loan-table.component.css']
})
export class LoanTableComponent implements OnInit {

  overdueBtn='false';

  tr;

  newtrs;

  newTable;

  @Input() 
  get trs(){
    return this.newtrs;
  };
  set trs(val){
    this.newtrs=val;
    this.trsChange.emit(this.trs);
  }

  @Output() trsChange=new EventEmitter();
  @Output() _hasOverdue=new EventEmitter();

  constructor(private deepCopy:DeepCopyService) { }

  ngOnInit() {
    this.tr=this.trs[this.trs.length-1];
  }

  hasKeyDown(e){
    this.trsChange.emit(this.trs);
  }

  hasOverdue(e,val){
    this.overdueBtn=e;
    if(e!=val){
      this._hasOverdue.emit(e);
    }
  }

  addTable(){

  }

}
