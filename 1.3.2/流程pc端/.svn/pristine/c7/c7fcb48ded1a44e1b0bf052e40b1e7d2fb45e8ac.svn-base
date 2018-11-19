import { HttpService } from './../../../shared/http/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-past-info',
  templateUrl: './past-info.component.html',
  styleUrls: ['./past-info.component.css']
})
export class PastInfoComponent implements OnInit {
  loading=true;
  totalPage=10;
  public searchObj;
  public pageState;
  public mapImg;
  navData;
  public rows=[];

  constructor(public activeRoute:ActivatedRoute,private http:HttpService) { 
    this.activeRoute.queryParams.subscribe(e=>{
      this.pageState=e;
    });
    this.http.getCustomHeaders('/v1/flow/historic-task/detail?processInstanceId='+this.pageState.id)
    .subscribe(
      {
        next:e=>{
          this.rows=e.data;
        },
        error:(err) => this.loading=false,
        complete:() => this.loading = false
      }
  );
    this.http.getCustomHeaders('/v1/flow/process/'+this.pageState.id+'/map')
    .subscribe(e=>{
      this.mapImg=e.data;
    })
  }

  ngOnInit() {
    this.navData=['流程详情'];
  }

}
