import { Injectable } from '@angular/core';

@Injectable()
export class RandomStringService {

  constructor() { }

  randomString(len=3) {
    　　var $chars = 'abcdefhijkmnprstwxyz';    
    　　var maxPos = $chars.length;
    　　var pwd = '';
    　　for (let i = 0; i < len; i++) {
    　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    　　}
    　　return pwd;
    }

}
