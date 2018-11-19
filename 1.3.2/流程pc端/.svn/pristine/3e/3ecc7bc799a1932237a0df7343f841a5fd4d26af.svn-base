import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ValideService } from './service/valide.service';
import { DisassemblyValueService } from './service/disassembly-value.service';
import { DeepCopyService } from './service/deep-copy.service';



@Component({
  selector: 'disassembly',
  templateUrl: './disassembly.component.html',
  styleUrls: ['./disassembly.component.css']
})
export class DisassemblyComponent implements OnInit {

  tree_mask=false;

  checkedTree;

  treeObj;

  treeShow=false;

  valideBoolean = false;

  @Input() config: any;
  @Output() valideChange=new EventEmitter();

  constructor(private valideServe: ValideService, private transformVal: DisassemblyValueService, private deepCopy: DeepCopyService) { }

  ngOnInit() {

  }

  hideLoanTable(e) {
    e.checked = false;
  }

  private setting = {
    data: {
      key: {
        name: "name"
      },
    },
    check: {
      enable: true,
      chkStyle: "checkbox",
      chkboxType: { "Y": "p", "N": "s" }
    },
    view: {
      showIcon: false
    }
  };

  //贷款中是否有逾期
  hasOverdue(e, i, j) {
    if (e[0] == 'true') {
      this.config.sheets[i].tables[j].tables[e[1]].overdueTrs = this.deepCopy.cloneObj(this.config.sheets[i].tables[j].tables[e[1]].overdue)
    } else {
      this.config.sheets[i].tables[j].tables[e[1]].overdueTrs = '';
    }
  }

  //添加表格
  addTable(e, i, j) {
    this.config.sheets[i].tables[j].tables.push(e);
  }

  //校验是否有值
  valide(e) {
    this.valideBoolean = this.valideServe.requireValue(this.config.sheets);
    this.valideChange.emit(this.valideBoolean);
  }

  //发送数据
  sure() {
  }

  checkTree() {
    this.checkedTree.checked = true;
    this.valide(1);
  }

  getObj(e) {
    this.checkedTree = e;
  }
}
