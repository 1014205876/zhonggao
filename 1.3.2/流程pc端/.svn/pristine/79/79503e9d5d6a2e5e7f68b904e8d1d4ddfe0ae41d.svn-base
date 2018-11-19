import { Injectable } from '@angular/core';

@Injectable()
export class ValideService {

  constructor() { }

  requireValue(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].tables.length; j++) {
        if (arr[i].tables[j].checked) {
          //当遇到贷款表时的验证
          if (arr[i].tables[j].tableType == "loan") {
            for (let k = 0; k < arr[i].tables[j].tables.length; k++) {
              for (let e = 0; e < arr[i].tables[j].tables[k].trs.length; e++) {
                for (let d = 0; d < arr[i].tables[j].tables[k].trs[e].length; d++) {
                  if(arr[i].tables[j].tables[k].trs[e][d].ele=='td'){
                    if (arr[i].tables[j].tables[k].trs[e][d].value == '' || arr[i].tables[j].tables[k].trs[e][d].value == undefined || arr[i].tables[j].tables[k].trs[e][d] == null) {
                      return false;
                    }
                    else{
                      if(arr[i].tables[j].tables[k].trs[e][d].value.match(arr[i].tables[j].tables[k].trs[e][d].reg)==null){
                        return false;
                      }
                    }
                  }
                }
              }
              if (arr[i].tables[j].tables[k].overdueTrs) {
                for (let e = 0; e < arr[i].tables[j].tables[k].overdueTrs.trs.length; e++) {
                  for (let d = 0; d < arr[i].tables[j].tables[k].overdueTrs.trs[e].length; d++) {
                    if(arr[i].tables[j].tables[k].overdueTrs.trs[e][d].ele=='td'){
                      if (arr[i].tables[j].tables[k].overdueTrs.trs[e][d].value == '' || arr[i].tables[j].tables[k].overdueTrs.trs[e][d].value == undefined || arr[i].tables[j].tables[k].overdueTrs.trs[e][d].value == null) {
                        return false;
                      }else{
                        if(arr[i].tables[j].tables[k].overdueTrs.trs[e][d].value.match(arr[i].tables[j].tables[k].overdueTrs.trs[e][d].reg)==null){
                          return false;
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            //普通表和加行表的验证
            for (let k = 0; k < arr[i].tables[j].trs.length; k++) {
              for (let d = 0; d < arr[i].tables[j].trs[k].length; d++) {
                if (arr[i].tables[j].trs[k][d].ele == 'td') {
                  if (arr[i].tables[j].trs[k][d].value == '' || arr[i].tables[j].trs[k][d].value == undefined || arr[i].tables[j].trs[k][d].value == null) {
                    return false;
                  }else{
                    if(arr[i].tables[j].trs[k][d].value.match(arr[i].tables[j].trs[k][d].reg)==null){
                      return false;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return true;
  }

}
