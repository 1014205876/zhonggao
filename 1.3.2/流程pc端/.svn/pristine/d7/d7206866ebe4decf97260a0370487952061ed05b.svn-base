import { HttpService } from './../../shared/http/http.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  @Input() info;

  pageState;

  public item;

  constructor(private http: HttpService, public activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(e => {
      this.pageState = e;
      this.http.getCustomHeaders('/v1/flow/process/' + this.pageState.processInsId + '/variables')
        .subscribe(e => {
          this.item = e.data;
        })
    })
  }
  ddOutcom() {
    this.http.getExcel('/v1/flow/ddTask/' + this.pageState.processInsId)
      .subscribe(e => {
        let result = e.blob();
        var blob = new Blob([result], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        var objectUrl = URL.createObjectURL(blob);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display:none');
        a.setAttribute('href', objectUrl);
        a.setAttribute('download', '尽调报告.xls');
        a.click();
        document.body.removeChild(a);
      })
  }
  regOutcom() {
    this.http.getExcel('/v1/flow/register/' + this.pageState.processInsId)
      .subscribe(e => {
        let result = e.blob();
        var blob = new Blob([result], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        var objectUrl = URL.createObjectURL(blob);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display:none');
        a.setAttribute('href', objectUrl);
        a.setAttribute('download', '融资登记报告.xls');
        a.click();
        document.body.removeChild(a);
      })
  }
  getAppoint(e, d) {
    if (d) {
      return d == 'am' ? e + " 上午" : e + " 下午"
    }
    return e ? (e.match(/14:00:00/) ? e.replace(/14:00:00/, '下午') : e.replace(/08:00:00/, '上午')) : '';
  }
  ngOnInit() {

  }

}
