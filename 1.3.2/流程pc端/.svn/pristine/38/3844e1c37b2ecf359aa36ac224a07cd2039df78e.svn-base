import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../shared/http/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  host: {
    style: 'height:calc(100% - 30px);'
  }
})
export class DashboardComponent implements OnInit {

  data = {
    currentCompanyUnfinshCount: '',
    currentFinshCount: '',
    currentTaxUnfinshCount: '',
    currentUnfinshCount: '',
    todayCount: '',
    totalCount: ''
  }

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getCustomHeaders('/v1/flow/process/count')
      .subscribe(e => {
        this.data = e.result;
      })
  }

  showList(e) {
    let arr = document.getElementsByClassName('pcodedItem');
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove('active');
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].children) {
        if (e == 'ZXD') {
          if (/征信贷/.test(arr[i].children[0].innerHTML)) {
            arr[i].classList.add('active');
          }
        }
        if (e == 'QK') {
          if (/企卡任务/.test(arr[i].children[0].innerHTML)) {
            arr[i].classList.add('active');
          }
        }
      }
    }
  }

}
