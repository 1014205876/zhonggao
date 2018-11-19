import { Injectable } from '@angular/core';

@Injectable()
export class TransformSelValService {

  constructor() { }

  getVal(e){
    let obj={
      creditSummary:{
        overdueStats:[],
        unclearedLoanStats:{},
        debitCardStats:{},
        semiCardStats:{}
      }
    };
    let tableArr=this.toArray(e);
    tableArr.map(e=>{
      if(!e.key){
        let data=this.normal(e);
        for(let key in data){
          obj[key]=data[key];
        }
      }else if(e.tableType=='list'){
        obj[e.key]=this.list(e);
      }else if(e.tableType=='normal'){
        if(!e.multilayer){
          if(e.key=='creditSummary.unclearedLoanStats'){
            obj.creditSummary.unclearedLoanStats=this.normal(e);
          }else if(e.key=='creditSummary.debitCardStats'){
            obj.creditSummary.debitCardStats=this.normal(e);
          }else if(e.key=='creditSummary.semiCardStats'){
            obj.creditSummary.semiCardStats=this.normal(e);
          }else{
            obj[e.key]=this.normal(e);
          }
        }else{
          if(e.key=='creditSummary.overdueStats'){
            obj.creditSummary.overdueStats=this.multilayer(e);
          }else if(e.key=='creditSummary.unclearedLoanStats'){
            obj.creditSummary.unclearedLoanStats=this.multilayer(e);
          }else{
            obj[e.key]=this.multilayer(e);
          }
        }
      }else if(e.tableType=='loan'){
        obj[e.key]=this.loan(e);
      }
    });
    return obj;
  }

  toArray(e){
    let arr=[];
    for(let i=0;i<e.sheets.length;i++){
      for(let j=0;j<e.sheets[i].tables.length;j++){
        if(e.sheets[i].tables[j].checked){
          arr.push(e.sheets[i].tables[j]);
        }
      }
    }
    return arr;
  }

  normal(e){
    let obj=new Object();
    for(let i=0;i<e.trs.length;i++){
      for(let j=0;j<e.trs[i].length;j++){
        if(e.trs[i][j].ele=='td'){
          obj[e.trs[i][j].key]=e.trs[i][j].value;
        }
      }
    }
    return obj;
  }

  multilayer(e){
    let arr=[];
    let count=0;
    let obj={};
    for(let i=0;i<e.trs.length;i++){
      for(let j=0;j<e.trs[i].length;j++){
        if(e.trs[i][j].ele=='td'){
          if(e.trs[i][j].belong!=count){
            count=e.trs[i][j].belong;
            obj={};
          }
          arr[e.trs[i][j].belong]=obj;
          obj[e.trs[i][j].key]=e.trs[i][j].value;
        }
      }
    }
    return arr;
  }

  list(e){
    let arr=[];
    for(let i=1;i<e.trs.length;i++){
      let obj={};
      for(let j=0;j<e.trs[i].length;j++){
        if(e.trs[i][j].ele=='td'){
          obj[e.trs[i][j].key]=e.trs[i][j].value;
        }
      }
      arr.push(obj);
    }
    return arr;
  }

  loan(e){
    let arr=[];
    for(let i=0;i<e.tables.length;i++){
      let obj={};
      for(let j=0;j<e.tables[i].trs.length;j++){
        for(let k=0;k<e.tables[i].trs[j].length;k++){
          if(e.tables[i].trs[j][k].ele=='td'&&!e.tables[i].trs[j][k].useless){
            obj[e.tables[i].trs[j][k].key]=e.tables[i].trs[j][k].value;
          }
        }
      }
      if(e.tables[i].overdueTrs){
        obj[e.tables[i].overdueTrs.key]=this.list(e.tables[i].overdueTrs);
      }
      arr.push(obj);
    }
    return arr;
  }

}
