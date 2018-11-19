import { Injectable } from '@angular/core';

@Injectable()
export class DeepCopyService {

  constructor() { }

  copyArr(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
      res.push(this.cloneObj(arr[i]))
    }
    return res
  }

  cloneObj(obj) {
    var newObj = {};
    if (obj instanceof Array) {
      newObj = [];
    }
    for (var key in obj) {
      var val = obj[key];
      if(key=='value'&&newObj['input']=='radio'){
        newObj[key]='false';
      }else if(key=='value'||key=='overdueTrs'){
        newObj[key]='';
      } else{
        newObj[key] =val instanceof RegExp? val:(typeof val === 'object' ? this.cloneObj(val) : val);
      }
    }
    return newObj;
  };

}
