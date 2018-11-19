import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-time',
  templateUrl: './form-time.component.html',
  styleUrls: ['./form-time.component.css']
})
export class FormTimeComponent implements OnInit {
  config: any;
  group: FormGroup;

  @ViewChild('warningBlock') warningBlock;

  warning;

  date;
  time;
  dateTime;

  constructor() { }

  ngOnInit() {
  }

  ban(e){
    e.target.value='';
    return;
  }

  getDay(e){
    this.warning = e.target.validationMessage;
    if(this.warning){
      this.warningBlock.show();
    }
  }

}
