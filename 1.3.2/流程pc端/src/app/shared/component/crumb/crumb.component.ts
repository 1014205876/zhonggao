import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crumb',
  templateUrl: './crumb.component.html',
  styleUrls: ['./crumb.component.css']
})
export class CrumbComponent implements OnInit {
  data;
  product='';
  pageState;
  @Input()
  list:Array<String>;
  constructor(private routeInfo:ActivatedRoute) { 
    this.routeInfo.queryParams.subscribe(e => {
      this.pageState = e;
      this.product = this.pageState.product;
    });
  }

  ngOnInit() {
    // if(this.product&&(this.product=="ZXD")){
    //   this.product="征信贷-";
    // }else if(this.product&&(this.product=="QK")){
    //   this.product="企卡-";
    // }else {
    //   this.product='';
    // }
    if(this.routeInfo.snapshot.routeConfig.path.search("past")>=0){
      this.data= '已办任务';
    }else{
      this.data= '当前任务';
    }
    if(this.routeInfo.snapshot.routeConfig.path=='home'||this.routeInfo.snapshot.routeConfig.path=='curFlow'){
      this.data= '';
    }
  }

}
