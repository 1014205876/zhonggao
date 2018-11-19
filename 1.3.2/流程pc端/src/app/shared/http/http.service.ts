import { Http, Headers } from '@angular/http'
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import state from '../state'
import { AuthService } from '../auth/auth.service'
import { HttpInterceptorService } from 'ng-http-interceptor'
import { CookieService } from 'ngx-cookie'
import { Router } from '@angular/router'

@Injectable()
export class HttpService {
	headers: Headers
	constructor(
		private http: Http,
		private auth: AuthService,
		private route: Router,
		private cookie: CookieService,
		private httpInterceptor: HttpInterceptorService
	) {
		this.httpInterceptor.request().addInterceptor((data, method) => {
			return data
		})

		this.httpInterceptor.response().addInterceptor((res) =>
			res.do(null, (e) => {
				if (e.status == 403) {
					this.cookie.remove('Template')
					this.route.navigate([ '/login' ])
				}
				return res
			})
		)
		this.headers = new Headers({
			Authorization: this.auth.getAuthorization(state.cookieName),
			'Content-Type': 'application/json',
			'AUTH_USER': 'zxcj'
		})
	}

	//线上去除  AUTH_USER
	getCustomHeaders(url: string) {
		return this.http.get(state.api + url, { headers: this.headers }).map((res) => res.json())
	}

	patchCustomHeaders(url: string, data: any) {
		return this.http.patch(url, data, { headers: this.headers }).map((res) => res.json())
	}

	postCustomHeaders(url: string, data: any) {
		return this.http.post(state.api + url, data, { headers: this.headers }).map((res) => res.json())
	}

	putCustomHeaders(url: string, data: any) {
		return this.http.put(state.api + url, data, { headers: this.headers }).map((res) => res.json())
	}

	deleteCustomHeaders(url: string) {
		return this.http.delete(state.api + url, { headers: this.headers })
	}

	getCustomHeaders2(url: string) {
		return this.http.get(url, { headers: this.headers }).map((res) => res.json())
	}
	upload(url: string, data: any) {
		let headers: Headers = new Headers({ Authorization: this.auth.getAuthorization(state.cookieName) })
		return this.http.post(url, data, { headers: headers }).map((res) => res.json())
	}
	getExcel(url: string) {
		this.headers['Content-Type'] = 'application/vnd.ms-excel;charset=utf-8'
		// let headers: Headers = new Headers({
		// 	Authorization: this.auth.getAuthorization(state.cookieName),
		// 	'Content-Type': 'application/vnd.ms-excel;charset=utf-8',
		// 	AUTH_USER: 'loanApprover'
		// })
		return this.http.get(state.api + url, { headers: this.headers, responseType: 3 })
	}
	getReportData(url: string) {
		return this.http.get(state.api + url, { headers: this.headers }).map((res) => res.json())
	}
}
