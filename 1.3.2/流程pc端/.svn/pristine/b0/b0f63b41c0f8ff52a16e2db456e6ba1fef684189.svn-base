import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { HttpService } from './shared/http/http.service'
import { HttpModule } from '@angular/http'
import { MenuComponent } from './shared/component/menu/menu.component'
import { MenuItemComponent } from './shared/component/menu-item/menu-item.component'
import { PresentComponent } from './pages/home/present/present.component'
import { CrumbComponent } from './shared/component/crumb/crumb.component'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { PastComponent } from './pages/home/past/past.component'
import { PageNavComponent } from './shared/component/page-nav/page-nav.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CalendarModule } from 'primeng/primeng'
import { CalendarComponent } from './shared/component/calendar/calendar.component'

import { PresentTableComponent } from './pages/home/present-table/present-table.component'
import { PastTableComponent } from './pages/home/past-table/past-table.component'
import { PastInfoComponent } from './pages/home/past-info/past-info.component'
import { DynamicFormModule } from './dynamic-form/dynamic-form.module'
import { ReadOnlyBlockComponent } from './component/read-only-block/read-only-block.component'
import { CustomerInfoComponent } from './component/customer-info/customer-info.component'
import { DisassemblyComponent } from './pages/home/disassembly/disassembly.component'
import { DisassemblyBlockComponent } from './component/disassembly-block/disassembly-block.component'
import { DisassemblyEtpComponent } from './component/disassembly-etp/disassembly-etp.component'
import { ImgWatcherComponent } from './component/img-watcher/img-watcher.component'
import { AuthGuardGuard } from './shared/auth-guard/auth-guard.guard'
import { AuthService } from './shared/auth/auth.service'
import { LoginComponent } from './pages/login/login.component'
import { CookieModule } from 'ngx-cookie'
import { HttpInterceptorService } from 'ng-http-interceptor'
import { HttpInterceptorModule } from 'ng-http-interceptor'
import { environment } from '../environments/environment'
import { LoadingComponent } from './shared/component/loading/loading.component'
// import { WarningComponent } from './shared/component/warning/warning.component';
import { CreditInvestigationComponent } from './shared/component/credit-investigation/credit-investigation.component'
import { SelfDisComponent } from './pages/home/self-dis/self-dis.component'
import { ComDisComponent } from './pages/home/com-dis/com-dis.component'
import { DisassemblyModule } from './disassembly/disassembly.module'
import { TransformSelValService } from './server/transform-sel-val.service'
import { TransformEtpValService } from './server/transform-etp-val.service'
import { ResourceDirective } from './shared/component/directive/resource.directive'
import { AppLoadModule } from './shared/app-load/app-load.module'
import { AuthCheckComponent } from './pages/home/auth-check/auth-check.component'
import { StepResultComponent } from './component/step-result/step-result.component'
import { DisassemblyAuthComponent } from './component/disassembly-auth/disassembly-auth.component'

import { ComponentModule } from './shared/component/component.module'
// import { CustomerInfoTableComponent } from './pages/home/customer-info-table/customer-info-table.component';
// import { TableDefineComponent } from './component/table-define/table-define.component';
import { ReportComponent } from './pages/home/report/report.component';
import { TableDefineComponent } from './component/table-define/table-define.component'

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { CurFlowComponent } from './pages/home/cur-flow/cur-flow.component'
const routes: Routes = [
	{ path: '', redirectTo: 'app/home', pathMatch: 'full' },
	{
		path: 'app',
		component: HomeComponent,
		children: [
			{ path: 'present/past', component: PastComponent },
			{ path: 'present/pastInfo', component: PastInfoComponent },
			{ path: 'present/presentTable', component: PresentTableComponent },
			{ path: 'present/report', component: ReportComponent },
			{ path: 'present/pastTable', component: PastTableComponent },
			{ path: 'present/disassembly', component: DisassemblyComponent },
			{ path: 'present/selfDis', component: SelfDisComponent },
			{ path: 'present/comDis', component: ComDisComponent },
			{ path: 'present/authCheck', component: AuthCheckComponent }
		]
	}
]

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		CookieModule.forRoot(),
		CalendarModule,
		RouterModule.forRoot(routes),
		NgxDatatableModule,
		DynamicFormModule,
		HttpInterceptorModule,
		DisassemblyModule,
		AppLoadModule,
		ComponentModule,
		ConfirmDialogModule
	],
	declarations: [
		AppComponent,
		HomeComponent,
		CrumbComponent,
		PastComponent,
		PresentComponent,
		PageNavComponent,
		CalendarComponent,
		PresentTableComponent,
		PastTableComponent,
		PastInfoComponent,
		ReadOnlyBlockComponent,
		CustomerInfoComponent,
		MenuComponent,
		MenuItemComponent,
		DisassemblyComponent,
		DisassemblyBlockComponent,
		DisassemblyEtpComponent,
		ImgWatcherComponent,
		LoginComponent,
		LoadingComponent,
		// WarningComponent,
		CreditInvestigationComponent,
		SelfDisComponent,
		ComDisComponent,
		ResourceDirective,
		AuthCheckComponent,
		StepResultComponent,
		DisassemblyAuthComponent,
		ReportComponent,
		TableDefineComponent,
		DashboardComponent,
		CurFlowComponent
	],
	entryComponents: [DashboardComponent, CurFlowComponent, PresentComponent, HomeComponent, PastComponent, PastInfoComponent, PresentTableComponent, ReportComponent, PastTableComponent, DisassemblyComponent, SelfDisComponent, ComDisComponent, AuthCheckComponent],
	providers: [HttpService, AuthGuardGuard, AuthService, TransformSelValService, TransformEtpValService],
	bootstrap: [AppComponent]
})
export class AppModule { }
