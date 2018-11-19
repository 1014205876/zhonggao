import { Component, OnInit, OnChanges, Renderer2, ViewChild, ElementRef, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  row;

  @Input() trs;

  @Input() sheetIndex;

  @Input() tableIndex;

  @Output() addBtn: EventEmitter<any> = new EventEmitter<any>();

  @Output() deleteBtn: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('tbody') tbody: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.tableInit();
  }

  tableInit() {
    this.trs.map(e => {
      let tr = this.renderer.createElement('tr');
      this.row = e;
      e.map(d => {
        let insert;
        let td = this.renderer.createElement(d.ele);
        if (d.name) {
          insert = this.renderer.createText(d.name);
        } else {
          insert = this.renderer.createElement('input');
          this.renderer.setProperty(insert, 'type', d.type);
          this.renderer.listen(insert, 'blur', e => {
            d.value = e.target.value;
          });
        }
        this.renderer.appendChild(td, insert);
        this.renderer.appendChild(tr, td);
      })
      this.renderer.appendChild(this.tbody.nativeElement, tr);
    })
  }

  add() {
    let tr = this.renderer.createElement('tr');
    let row = this.copyArr(this.row);
    row.map((e, i) => {
      let insert;
      let td = this.renderer.createElement(e.ele);
      if (i == (row.length - 1)) {
        let btn = this.renderer.createElement('button');
        this.renderer.appendChild(btn, this.renderer.createText('X'))
        this.renderer.addClass(btn, 'deleteBtn');
        this.renderer.appendChild(td, btn)
        this.renderer.listen(btn, 'click', d => {
          this.renderer.removeChild(this.tbody.nativeElement, tr);
          this.deleteBtn.emit({ sheetIndex: this.sheetIndex, tableIndex: this.tableIndex, row: row });
        });
      }
      if (e.name) {
        insert = this.renderer.createText(e.name);
      } else {
        insert = this.renderer.createElement('input');
        this.renderer.setProperty(insert, 'type', e.type);
        this.renderer.listen(insert, 'blur', d => {
          e.value = d.target.value;
        });
      }
      this.renderer.appendChild(td, insert);
      this.renderer.appendChild(tr, td);
    })
    this.renderer.appendChild(this.tbody.nativeElement, tr);
    this.addBtn.emit({ sheetIndex: this.sheetIndex, tableIndex: this.tableIndex, row: row });
  }

  delete() {
    // this.deleteBtn.emit({ sheetIndex: this.sheetIndex, tableIndex: this.tableIndex, trIndex: });
  }

  //深度拷贝数组
  copyArr(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
      res.push(this.cloneObj(arr[i]))
    }
    return res
  }

  cloneObj(obj) {
    var newObj = {};
    if (obj instanceof Array) {
      newObj = [];
    }
    for (var key in obj) {
      var val = obj[key];
      newObj[key] = typeof val === 'object' ? this.cloneObj(val) : val;
    }
    return newObj;
  };


}
