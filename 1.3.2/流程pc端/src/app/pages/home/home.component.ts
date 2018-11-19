import { HttpService } from './../../shared/http/http.service';

import { Component, OnInit,AfterViewInit } from '@angular/core';
import { routeAnimate } from '../../shared/animation/routeAnimation';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth/auth.service';
import status from '../../shared/state';
import resource from '../../shared/app-load/resource';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './../../../assets/icon/menu/iconfont.css',
    './../../../assets/icon/operate/iconfont.css',
    './home.component.css'
  ],
  animations: [routeAnimate]
})
export class HomeComponent implements OnInit {

  financ;

  userName;

  mask = false;
  mask2 = false;
  show = false;
  account;
  reason;

  routerStateCode = 'leave'

  menuItem = resource.menu;

  public AppList;

  pwdForm: FormGroup;
  public pwd={
    origPwd: '',
    newPwd: '',
    confPwd: ''
  };


  constructor(private auth: AuthService, private cookie: CookieService, private router: Router, private http: HttpService, private routeInfo: ActivatedRoute) {
    this.userName=this.cookie.get(status.loginName);
    this.http.getCustomHeaders('/v1/flow/financ')
    .subscribe(e=>{
      this.financ=e.data;
    })
    this.pwdForm=new FormGroup({
      origPwd: new FormControl(),
      newPwd: new FormControl('',Validators.pattern('')),
      confPwd: new FormControl('',Validators.pattern(''))
    })
  }

  // logOff() {
  //   this.auth.logOff(status.cookieName);
  //   this.router.navigate(['/login']);
  // }
  logOff(){
    window.location.href=window.location.protocol+'//'+window.location.host+'/logout';
  }

  ngOnInit() {
    this.getOtherAPP();
    this.getUser();
    this.router.events.subscribe(e=>{
      if(document.getElementById('main')){
        document.getElementById('main').scrollTop=0;
      }
    })
  }

  navShow(e){
    console.log(e)
    if(e){
      this.show=false;
    }else{
      this.show=true;
    }
  }

  reset(){
    this.pwd={
      origPwd: '',
      newPwd: '',
      confPwd: ''
    }
  }

  resetPwd(){
    console.log(this.pwd)
    this.http.patchCustomHeaders('/api/peak-resource/v1/resource/user/pass/'+this.account,{"oldPassword":this.pwd.origPwd,"newPassword":this.pwd.newPwd})
    .subscribe(res => {
      if(res.code=='200'){
        this.logOff()
      }else{
        this.reason=res.reason;
        this.mask2=true;
        this.reset();
        this.pwdForm.reset();
      }
    })
  }

  getOtherAPP(){
    this.http.getCustomHeaders2("api/peak-resource/v1/resource/apps/permission").subscribe(res => {
      this.AppList=res.result;
    })
  }

  getUser(){
    this.http.getCustomHeaders2('/api/peak-resource/v1/resource/users/info')
    .subscribe(res => {
      this.userName=res.result.name;
      this.account = res.result.account;
      this.cookie.put(status.loginName, res.result.account, { expires: new Date(new Date().getTime() + 7516800000) });
    })
  }

}
