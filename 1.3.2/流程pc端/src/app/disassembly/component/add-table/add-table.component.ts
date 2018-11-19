import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DeepCopyService } from '../../service/deep-copy.service';

@Component({
  selector: 'add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {

  overdueBtn='false';

  priTable;

  newTable;

  @Input()
  get tables(){
    return this.newTable;
  };
  set tables(val){
    this.newTable=val;
    this.tableChange.emit(this.tables);
  }

  @Output() tableChange=new EventEmitter();
  @Output() _hasOverdue=new EventEmitter();
  @Output() _addTable=new EventEmitter();
  @Output() getBottom=new EventEmitter();

  constructor(private deepCopy:DeepCopyService) { }

  ngOnInit() {
    for(let i = 0;i<this.tables.length;i++){
      this.tables[i].trs.length=2;
    }
    this.priTable=this.deepCopy.cloneObj(this.tables[0]);
  }

  hasKeyDown(e){
    this.tableChange.emit(this.tables);
  }

  hasOverdue(e,val){
    this.overdueBtn=e[0];
    if(e[0]!=val){
      if(e[0]=='true'){
        this.tables[e[1]].trs.push(this.deepCopy.cloneObj(this.tables[0].overdueDate));
      }else{
        this.tables[e[1]].trs.splice(this.tables[e[1]].trs.length-1,1);
      }
      this._hasOverdue.emit(e);
    }
  }

  addTable(){
    this._addTable.emit(this.deepCopy.cloneObj(this.priTable));
  }

  deleteTable(e){
    if(this.tables.length>1){
      this.tables.splice(e,1)
    }else{
      this.getBottom.emit('getBottom');
    }
  }

}
