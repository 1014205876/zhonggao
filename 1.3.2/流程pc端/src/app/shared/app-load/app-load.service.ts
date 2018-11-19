import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Http, Headers } from '@angular/http'
// import { Router } from '@angular/router'
import resource from './resource'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'

@Injectable()
export class AppLoadService {
	constructor(private http: Http, private httpClient: HttpClient) {}
	getSettings(){}
	// getSettings(): Promise<any> {
	// 	let headers = new Headers({
	// 		'Content-Type': 'application/json',
	// 		AUTH_USER: 'loanApprover',
	// 		AUTH_ID: '6c3a7833-16a1-42fb-905f-4e94b8985b79'
	// 	})
	// 	const promise = this.http
	// 		// .get('/api/peak-resource/api/resource/user/permission', { headers: headers })
	// 		.get('/api/peak-resource/api/resource/user/permission')
	// 		.map((res) => res.json())
	// 		.toPromise()
	// 		.then((res) => {
	// 			resource.ResourceItems = res.result.resource
	// 			resource.menu = res.result.menu
	// 			return res
	// 		})
	// 	return promise
	// }
}
