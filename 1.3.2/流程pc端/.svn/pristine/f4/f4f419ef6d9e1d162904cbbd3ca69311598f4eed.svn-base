import { Injectable } from '@angular/core';

@Injectable()
export class TransformEtpValService {

  constructor() { }
  getVal(e){
    let obj={
      summary:{
        currentAssetDebt:{},
        currentLoanDebtList:[],
        clearedLoanDebtList:[],
        guaranteeStatsList:[],
        debitHistoryList:[],
      },
      currentDebt:{
        abnormalLoan:{
          loanList:[],
          otherLoanList:[],
          tradeFinancingList:[],
          factoringList:[],
          bankAcceptanceList:[],
          letterCredit:[],
          guaranteeLetter:[]
        },
        attentionLoan:{
          loanList:[],
          tradeFinancingList:[],
          factoringList:[],
          bankAcceptanceList:[],
          letterCredit:[],
          guaranteeLetter:[],
          billDiscountedList:[]
        },
        normalLoan:{
          loanList:[],
          otherLoanList:[],
          tradeFinancingList:[],
          factoringList:[],
          billDiscountedList:[],
          bankAcceptanceList:[],
          letterCredit:[],
          guaranteeLetter:[],
        }
      },
      clearDebt:{
        guarantee:[],
        interest:[],
        advances:[],
        clearedLoan:{
          loanList:[],
          otherLoanList:[],
          tradeFinancingList:[]
        }
      },
      guaranteeRecordList:[],
      common:{
        taxOwedList:[]
      }
    };
    let tableArr=this.toArray(e);
    tableArr.map(e=>{
      if(!e.key){
        let data=this.normal(e);
        for(let key in data){
          obj[key]=data[key];
        }
      }else if(e.tableType=='normal'){
        if(e.key=='summary.currentAssetDebt'){
          let b=this.normal(e);
          for(let key in b){
            obj.summary.currentAssetDebt[key]=b[key];
          }
        }
      }else if(e.tableType=='list'){
        if(e.key=='summary.currentLoanDebtList'){
          let arr=this.list(e);
          arr.splice(0,1);
          obj.summary.currentLoanDebtList=arr;
        }else if(e.key=='summary.clearedLoanDebtList'){
          obj.summary.clearedLoanDebtList=this.list(e);
        }else if(e.key=='summary.guaranteeStatsList'){
          let arr=this.list(e);
          arr.splice(0,1);
          obj.summary.guaranteeStatsList=arr;
        }else if(e.key=='summary.debitHistoryList'){
          obj.summary.debitHistoryList=this.list(e);
        }else if(e.key=='currentDebt.abnormalLoan.loanList'){
          obj.currentDebt.abnormalLoan.loanList=this.list(e);
        }else if(e.key=='currentDebt.abnormalLoan.otherLoanList'){
          obj.currentDebt.abnormalLoan.otherLoanList=this.list(e);
        }else if(e.key=='currentDebt.abnormalLoan.tradeFinancingList'){
          obj.currentDebt.abnormalLoan.tradeFinancingList=this.list(e);
        }else if(e.key=='currentDebt.abnormalLoan.factoringList'){
          obj.currentDebt.abnormalLoan.factoringList=this.list(e);
        }else if(e.key=='currentDebt.abnormalLoan.bankAcceptanceList'){
          obj.currentDebt.abnormalLoan.bankAcceptanceList=this.list(e);
        }else if(e.key=='currentDebt.abnormalLoan.letterCredit'){
          obj.currentDebt.abnormalLoan.letterCredit=this.list(e);
        }else if(e.key=='currentDebt.abnormalLoan.guaranteeLetter'){
          obj.currentDebt.abnormalLoan.guaranteeLetter=this.list(e);
        }else if(e.key=='currentDebt.attentionLoan.loanList'){
          obj.currentDebt.attentionLoan.loanList=this.list(e);
        }else if(e.key=='currentDebt.attentionLoan.tradeFinancingList'){
          obj.currentDebt.attentionLoan.tradeFinancingList=this.list(e);
        }else if(e.key=='currentDebt.attentionLoan.factoringList'){
          obj.currentDebt.attentionLoan.factoringList=this.list(e);
        }else if(e.key=='currentDebt.attentionLoan.bankAcceptanceList'){
          obj.currentDebt.attentionLoan.bankAcceptanceList=this.list(e);
        }else if(e.key=='currentDebt.attentionLoan.letterCredit'){
          obj.currentDebt.attentionLoan.letterCredit=this.list(e);
        }else if(e.key=='currentDebt.attentionLoan.guaranteeLetter'){
          obj.currentDebt.attentionLoan.guaranteeLetter=this.list(e);
        }else if(e.key=='currentDebt.normalLoan.loanList'){
          obj.currentDebt.normalLoan.loanList=this.list(e);
        }else if(e.key=='currentDebt.normalLoan.otherLoanList'){
          obj.currentDebt.normalLoan.otherLoanList=this.list(e);
        }else if(e.key=='currentDebt.normalLoan.tradeFinancingList'){
          obj.currentDebt.normalLoan.tradeFinancingList=this.list(e);
        }else if(e.key=='currentDebt.normalLoan.factoringList'){
          obj.currentDebt.normalLoan.factoringList=this.list(e);
        }else if(e.key=='currentDebt.normalLoan.billDiscountedList'){
          obj.currentDebt.normalLoan.billDiscountedList=this.list(e);
        }else if(e.key=='currentDebt.normalLoan.bankAcceptanceList'){
          obj.currentDebt.normalLoan.bankAcceptanceList=this.list(e);
        }else if(e.key=='currentDebt.normalLoan.letterCredit'){
          obj.currentDebt.normalLoan.letterCredit=this.list(e);
        }else if(e.key=='currentDebt.normalLoan.guaranteeLetter'){
          obj.currentDebt.normalLoan.guaranteeLetter=this.list(e);
        }else if(e.key=='clearDebt.guarantee'){
          obj.clearDebt.guarantee=this.list(e);
        }else if(e.key=='clearDebt.interest'){
          obj.clearDebt.interest=this.list(e);
        }else if(e.key=='clearDebt.advances'){
          obj.clearDebt.advances=this.list(e);
        }else if(e.key=='clearDebt.clearedLoan.loanList'){
          obj.clearDebt.clearedLoan.loanList=this.list(e);
        }else if(e.key=='clearDebt.clearedLoan.otherLoanList'){
          obj.clearDebt.clearedLoan.otherLoanList=this.list(e);
        }else if(e.key=='clearDebt.clearedLoan.tradeFinancingList'){
          obj.clearDebt.clearedLoan.tradeFinancingList=this.list(e);
        }else if(e.key=='guaranteeRecordList'){
          obj.guaranteeRecordList=this.list(e);
        }else if(e.key=='common.taxOwedList'){
          obj.common.taxOwedList=this.list(e);
        }else if(e.key=='currentDebt.attentionLoan.billDiscountedList'){
          obj.currentDebt.attentionLoan.billDiscountedList=this.list(e);
        }
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
