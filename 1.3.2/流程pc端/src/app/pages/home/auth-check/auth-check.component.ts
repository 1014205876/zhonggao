import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../shared/http/http.service';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/combineLatest';
import status from '../../../shared/state';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-auth-check',
  templateUrl: './auth-check.component.html',
  styleUrls: ['./auth-check.component.css']
})
export class AuthCheckComponent implements OnInit {

  // 错误提示
  @ViewChild('warningBlock') warningBlock;
  warning;

  valide = false;
  loading;
  operator;
  pageState;
  product;

  authItems={
    "allowOrNot": "",
    "approveRemark": "",
    "action": ""
  }

  mask=false;
  confirmMsg;
  btnText;

  config=[];
  rows;
  controllerCredits;
  corporateCredits;

  constructor(
    public activeRoute: ActivatedRoute,
    private router: Router,
    private cookie: CookieService,
    private http: HttpService
  ) {
    this.activeRoute.queryParams.subscribe(e => {
      this.pageState = e;
      this.product=this.pageState.product;
    });
    this.operator = this.cookie.get(status.loginName);
    this.getPic();
    this.getForm();
  }

  ngOnInit() {
  }

  // 获取生成动态表单的数据
  getForm(){
    this.http.getCustomHeaders("/v1/flow/task/"+this.pageState.taskId+"/variables")
    .subscribe(
      {
        next: (e) => {
          this.config=e.data.jsonObject.fields;
          // this.config=[
          //   {
          //     "fieldType":"FormField",
          //     "id":"appointTime",
          //     "layout":null,
          //     "name":"最终预约时间",
          //     "overrideId":true,
          //     "placeholder":"dayTime",
          //     "readOnly":false,
          //     "required":true,
          //     "type":"dayTime",
          //     "value":"asdasdasd"
          //   }
          // ]
        },
      }
    )
  }
  // 获取材料审核的数据
  getPic(){
    this.http.getCustomHeaders("/v1/flow/process/"+this.pageState.processInsId+"/variables")
    .subscribe(
      {
        next: (e) => {
          this.rows=e.data
          this.operator=e.data.assignee;
          // this.controllerCredits = this.rows.corporateCredits.split(',');
          // this.corporateCredits = this.rows.corporateCredits.split(',');
          // console.log(this.controllerCredits)
          // console.log(this.corporateCredits)
        }
      }
    )
  }
  // 选择禁入后，点击弹窗的确定按钮，该流程终止，跳转到已办任务页面
  claim() {
    this.loading = true;
    this.authItems.action = 'complete';
    this.http.postCustomHeaders("/v1/flow/task/"+this.pageState.taskId, this.authItems)
    .subscribe(
      {
        next: (e) => this.router.navigate(['/app/present/past'],{queryParams:{'from':'1', 'product': this.product}})
      }
    )
    
  }

  cal() {
    this.mask=false;
  }

  getValide(){
    setTimeout(() => {
      if(this.authItems.allowOrNot=='pass'){
        this.valide = true;
      }
    }, 100);
  }

  save(){
    status.dis.auth=this.authItems;
  }

  sure(e){
  }

  formSubmitted(form: any){
    // let count = 0;
    // for (let key in form.controls) {
    //   if (form.controls[key].errors) {
    //     this.warningBlock.show();
    //     if (form.controls[key].errors.hasOwnProperty('required') || form.controls[key].errors.hasOwnProperty('hasValue')) {
    //       this.warning = this.config[count].name + "不得为空";
    //     } else if (form.controls[key].errors.hasOwnProperty('pattern')) {
    //       this.warning = this.config[count].name + "格式有误";
    //     }
    //     return false;
    //   }
    //   count++;
    // }
    this.authItems.allowOrNot=form.value.allowOrNot;
    this.authItems.approveRemark=form.value.approveRemark;
    if(!form.value.allowOrNot) {
      this.mask=true;
      this.confirmMsg='请填写审批结果';
    }else if(form.value.allowOrNot=='reject'){
      this.mask=true;
      this.confirmMsg='是否驳回该客户的申请？';
    }else {
      this.save();
      this.router.navigate(['/app/present/selfDis'],{queryParams:{'taskId':this.pageState.taskId,'processInsId':this.pageState.processInsId,'type':this.pageState.type, 'product': this.product}})
    }
  }

}
