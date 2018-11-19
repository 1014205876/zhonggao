import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../shared/http/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import status from '../../../shared/state';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-disassembly',
  templateUrl: './disassembly.component.html',
  styleUrls: ['./disassembly.component.css']
})
export class DisassemblyComponent implements OnInit {

  //企业和个人征信报告下载路劲数组
  credit = [];

  @ViewChild('warning') warning;

  warningMsg;

  mask;
  operator;
  pageState;

  loading = true;

  perFile;
  perName;
  comFile;
  comName;

  constructor(private http: HttpService, private router: Router, public activeRoute: ActivatedRoute, private cookie: CookieService) {
    this.activeRoute.queryParams.subscribe(e => {
      this.pageState = e;
    });
    this.claim();
    this.operator = this.cookie.get(status.loginName);
    this.http.getCustomHeaders('/v1/flow/process/' + this.pageState.processInsId + '/variables')
      .subscribe({
        next: e => {
          this.credit.push("http://192.168.111.212:6200/static/credit/" + e.data.creditFileName);
        },
        error: (err) => this.loading = false,
        complete: () => this.loading = false
      })
  }

  downCredit() {
    for (let i = 0; i < this.credit.length; i++) {
      var a = document.createElement("a"), //创建a标签
        e = document.createEvent("MouseEvents"); //创建鼠标事件对象
      e.initEvent("click", false, false); //初始化事件对象
      a.href = this.credit[0]; //设置下载地址
      a.dispatchEvent(e); //给指定的元素，执行事件click事件
    }
  }

  ngOnInit() {

  }

  getPerFile(e) {
    this.perFile = e.target.files[0];
    this.perName = e.target.files[0].name;
  }

  delPerFile() {
    this.perFile = undefined;
    this.perName = undefined;
  }

  getComFile(e) {
    this.comFile = e.target.files[0];
    this.comName = e.target.files[0].name;
  }
  delComFile() {
    this.comFile = undefined;
    this.comName = undefined;
  }

  sure() {
    if (!this.perFile || !this.comFile) {
      this.warningMsg = '个人征信报告或企业征信报告未上传';
      this.warning.show();
      return;
    }
    this.loading = true;
    let formData = new FormData();
    formData.append('self', this.perFile);
    formData.append('etp', this.comFile);
    this.http.upload('/dis/credit/import', formData)
      .subscribe(
      {
        next: (e) => {
          this.router.navigate(['/app/present/presentTable'], { queryParams: { taskId: this.pageState.taskId, processInsId: this.pageState.processInsId, type: this.pageState.type, selfCreditReportId: e.data.selfCreditReportId, etpCreditReportId: e.data.etpCreditReportId } });
        },
        error: (err) => {
          this.loading = false;
          this.warningMsg = '文档内容或格式异常，请重新上传';
          this.warning.show();
        },
        complete: () => this.loading = false
      }
      )
  }

  claim() {
    this.http.postCustomHeaders('/v1/flow/task/' + this.pageState.taskId, { action: 'claim' })
      .subscribe(() => {
        this.operator = this.cookie.get(status.loginName);
      })
  }

  cal() {
    this.router.navigate(['/app/present']);
  }

}
