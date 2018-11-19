import { Routes, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs/observable/of';
import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { post } from 'selenium-webdriver/http';
import { HttpService } from '../../shared/http/http.service';
import status from '../../shared/state';
import '../../mock/mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public remebPsw = true;
  public authorizationService: string;

  public mask = false;
  errorMsg = '您的用户名或密码不正确';
  constructor(private http: HttpService, private cookie: CookieService, private router: Router) {

  }
  //时候记住密码
  remebPswFun() {
    this.remebPsw = !this.remebPsw;
  }


  ngOnInit() {
  }

  onSubmit(form) {
    let value = form.value;
    if (!value.loginName || !value.password) {
      this.mask = true;
      this.errorMsg = '请检查您的用户名或密码是否填写正确';
      return;
    }
    if (form.valid) {
      this.mask = false;
      value.rememberMe = true;
      this.http.postCustomHeaders("/auth/login", value)
        .subscribe(res => {
          this.authorizationService = res.result.type + " " + res.result.token;
          this.cookie.put(status.cookieName, this.authorizationService, { expires: new Date(new Date().getTime() + 2505600000) });
          this.cookie.put(status.loginName, value.loginName, { expires: new Date(new Date().getTime() + 7516800000) });
          this.router.navigate(['/app']);
        }, error => {
          this.mask = true;
          this.errorMsg = error.json().message;
        });
    }
  }

}
