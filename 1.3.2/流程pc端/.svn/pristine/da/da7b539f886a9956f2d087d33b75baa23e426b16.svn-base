import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../shared/http/http.service';

@Component({
  selector: 'app-cur-flow',
  templateUrl: './cur-flow.component.html',
  styleUrls: ['./cur-flow.component.css']
})
export class CurFlowComponent implements OnInit {
  @ViewChild('pn') pn;
  curPage=1;
  mask=false;
  processInsId;
  list=[];
  totalPage=0;
  searchObj={
    projectNumber:'',
    entName:''
  };

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.changePage(this.curPage);
  }

  search(){
    this.pn.currentPage=1;
    this.changePage(1);
  }

  changePage(e){
    console.log(e)
    this.curPage=e;
    this.http.getCustomHeaders('/v1/flow/process/all?pageSize=10&pageNo='+this.curPage+'&projectNumber='+this.searchObj.projectNumber+'&entName='+this.searchObj.entName)
    .subscribe(e=>{
      this.list=e.result.list;
      this.totalPage=Math.ceil(e.result.count/10);
    })
  }

  stopFlow(e){
    this.http.deleteCustomHeaders('/v1/flow/process/'+this.processInsId+'/delete')
    .subscribe(res=>{
      this.changePage(this.curPage);
    })
  }

}
