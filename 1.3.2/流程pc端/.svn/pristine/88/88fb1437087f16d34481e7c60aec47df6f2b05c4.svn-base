import { HttpService } from './../../../shared/http/http.service';
import { Component, OnInit, HostBinding,ViewChild } from '@angular/core';
import { enterRouteAnimate } from '../../../shared/animation/enterRouteAnimation';
import { ActivatedRoute, Router } from '@angular/router';
import resource from '../../../shared/app-load/resource';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css'],
  animations:[enterRouteAnimate],
  host:{
    'style':"height:calc(100% - 30px);"
  }
})
export class PastComponent implements OnInit {

  @ViewChild('pn') pn;

   // 定义路由动画
   @HostBinding('@enterRouteAnimate') state;
   loading;
  totalPage;
  public searchObj=new SearchObj();
  public rows=[];

  pageState;
  product;

  constructor(private activeRoute: ActivatedRoute,private routeInfo:ActivatedRoute,private router:Router,private http:HttpService) { 
    this.routeInfo.queryParams.subscribe(e=>{
      if(e.from){
        this.state='enter';
      }
    })
    this.activeRoute.queryParams.subscribe(e => {
      this.pageState = e;
      this.product = this.pageState.product;
      if(!this.product){
        this.router.navigate(['/app/present/past'], { queryParams: { 'from':'1', 'product': resource.menu[0].state } });
      }
    });
  }
  
  ngOnInit() {
    this.pn.currentPage=1;
    this.search(this.pn.currentPage);
  }
  changePage(e){
    this.search(e);
  }

  search(e){
    this.loading=true;
    this.http.getCustomHeaders(encodeURI('/v1/flow/historic-task?pageSize=10'+'&pageNo='+e+'&etpName='+(this.searchObj.etpName||'')+'&createStartDate='+(this.formatDate(this.searchObj.createStartDate)||'')+'&createEndDate='+(this.formatDate(this.searchObj.createEndDate)||'')+'&productName='+this.product))
    .subscribe({
      next:e=>{
        if(e.data){
          this.rows=e.data.list;
          this.totalPage=Math.ceil(e.data.count/10);
        }else{
          this.loading=false
        }
      },
      error:(err)=>this.loading=false,
      complete:()=>{
        this.loading=false;
      }
    })
  }

  formatDate(date){
    let time=new Date(date);
    if(date){
      return time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
    }
    return false;
  }

}
class SearchObj {
  constructor(
    public nickName?: String,
    public etpName?: String,
    public createStartDate?: Date,
    public createEndDate?: Date
  ) { }
}