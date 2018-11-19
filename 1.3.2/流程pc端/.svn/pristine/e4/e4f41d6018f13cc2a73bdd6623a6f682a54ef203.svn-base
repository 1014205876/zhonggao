import { HttpService } from './../../shared/http/http.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step-result',
  templateUrl: './step-result.component.html',
  styleUrls: ['./step-result.component.css']
})
export class StepResultComponent implements OnInit {

  @Input() info;
  time;

  constructor() { }

  ngOnInit() {
    if(this.info.key=='appointConfirmForm'){
      let fields = this.info.fields;
      for (var i=0; i< fields.length; i++){
        if(fields[i].id=='appointConfirmTime'){
          console.log(fields[i].value)
          this.time=this.transformTime(fields[i].value);
          console.log(this.time)
        }
      }
    }
  }
  transformTime(e){
    if(e){
      let temp=e.split('-');
      let temp2=temp[2].split(' ');
      var time;
      var value
      if(temp2[1]=='08:00:00'){
        time='AM';
      }else if(temp2[1]=='14:00:00'){
        time='PM';
      }
      value=temp[0]+'-'+temp[1]+'-'+temp2[0]+' '+time;
    }
    return value;
  }

}
