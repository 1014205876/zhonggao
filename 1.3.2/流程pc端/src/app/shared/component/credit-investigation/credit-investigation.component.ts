import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'credit-investigation',
  templateUrl: './credit-investigation.component.html',
  styleUrls: ['./credit-investigation.component.css']
})
export class CreditInvestigationComponent implements OnInit {

  config:any={
    name:'个人征信报告',
    sheets:[
      {
        name:'报告信息',
        
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
