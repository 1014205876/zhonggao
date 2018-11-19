import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DeepCopyService } from '../../service/deep-copy.service';

@Component({
  selector: 'normal-table',
  templateUrl: './normal-table.component.html',
  styleUrls: ['./normal-table.component.css']
})
export class NormalTableComponent implements OnInit {

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
    this.tr=this.trs[this.trs.length-1];
  }

  hasKeyDown(e){
    this.trsChange.emit(this.trs);
  }
}
