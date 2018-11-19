import { Injectable } from '@angular/core';

@Injectable()
export class DisassemblyValueService {

  constructor() { }

  listValue(arr) {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
      let newArr1=[];
      for (let j = 0; j < arr[i].length; j++) {
        let key = arr[i][j].key.toString();
        let value = arr[i][j].value;
        let obj=new Object();
        obj[key]=value;
        newArr1.push(obj)
      }
      newArr.push(newArr1);
    }
    return newArr;
  }

}
