import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-daytime',
  templateUrl: './form-daytime.component.html',
  styleUrls: ['./form-daytime.component.css']
})
export class FormDaytimeComponent implements OnInit {

  config: any;
  group: FormGroup;

  @ViewChild('warningBlock') warningBlock;

  warning;
  isShow=false;

  date;
  time='08:00:00';
  dateTime;

  constructor() { }

  ngOnInit() {
    console.log(this.group)
  }

  ban(e){
    e.target.value='';
    return;
  }

  getDay(e){
    let msg=e.target.validationMessage
    if(msg){
      this.warning = msg;
      this.show()
    }
    else {
      this.getTime()
    }
  }

  getTime(){
    if(this.date&&this.time){
      this.dateTime=this.date+' '+this.time;
      this.group.controls[this.config.id].setValue(this.dateTime);
    }else {
      this.group.controls[this.config.id].setValue("");
    }
  }

  show(){
    this.isShow=true;
  }

  hide(){
    this.isShow=false;
    this.date=new Date();
    setTimeout(() => {
      this.date=''
    }, 1000);
    this.group.controls[this.config.id].setValue("");
  }

}
