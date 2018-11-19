import { Component } from '@angular/core';
import { Router } from '@angular/router';
import resource from './shared/app-load/resource';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { CurFlowComponent } from './pages/home/cur-flow/cur-flow.component';
import { PresentComponent } from './pages/home/present/present.component';
import { HomeComponent } from './pages/home/home.component';
import { PastComponent } from './pages/home/past/past.component';
import { PastInfoComponent } from './pages/home/past-info/past-info.component';
import { PresentTableComponent } from './pages/home/present-table/present-table.component';
import { ReportComponent } from './pages/home/report/report.component';
import { PastTableComponent } from './pages/home/past-table/past-table.component';
import { DisassemblyComponent } from './pages/home/disassembly/disassembly.component';
import { SelfDisComponent } from './pages/home/self-dis/self-dis.component';
import { ComDisComponent } from './pages/home/com-dis/com-dis.component';
import { AuthCheckComponent } from './pages/home/auth-check/auth-check.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  constructor(private router: Router) {
    for (let i = resource.menu.length - 1; i >= 0; i--) {
      if (resource.menu[i].type == 'link') {
        if (resource.menu[i].url == '/app/home') {
          this.router.config[1].children.unshift({ path: 'home', component: DashboardComponent });
        }
      } else {
        for (let j = resource.menu[i].children.length-1; j >= 0; j--) {
          console.log(resource.menu[i].children[j])
          if (resource.menu[i].children[j].url == '/app/curFlow') {
            this.router.config[1].children.unshift({ path: 'curFlow', component: CurFlowComponent });
          }
          if (resource.menu[i].children[j].url == '/app/present') {
            this.router.config[1].children.unshift({ path: 'present', component: PresentComponent });
          }
        }
      }
    }
    this.router.config[0].redirectTo='app/'+this.router.config[1].children[0].path;
    console.log(this.router.config)
  }
}
