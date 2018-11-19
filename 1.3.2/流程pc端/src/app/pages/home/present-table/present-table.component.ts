import { Observable } from 'rxjs/Observable'
import { Component, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpService } from '../../../shared/http/http.service'
import 'rxjs/add/observable/from'
import 'rxjs/add/operator/combineLatest'
import status from '../../../shared/state'
import resource from '../../../shared/app-load/resource'
import { CookieService } from 'ngx-cookie'
import { ConfirmationService } from 'primeng/api'

@Component({
	selector: 'app-present-table',
	templateUrl: './present-table.component.html',
	styleUrls: [ './present-table.component.css' ],
	providers: [ ConfirmationService ]
})
export class PresentTableComponent implements OnInit {
	@ViewChild('warningBlock') warningBlock

	warning
	warnCancelShow = false

	//loading动画
	loading = true

	mask
	confirmMsg
	btnText

	operator

	selfObj
	etpObj
	authObj

	obj = [ { name: '123', value: 'asd', type: 'image' } ]
	reportShow = false
	reportType = 'customer'
	config = []
	public pageState
	public navData
	public product

	public data = []

	constructor(
		public activeRoute: ActivatedRoute,
		private http: HttpService,
		private router: Router,
		private cookie: CookieService,
		private confirmService: ConfirmationService
	) {
		this.activeRoute.queryParams.subscribe((e) => {
			this.pageState = e
			this.product = this.pageState.product
			if (this.pageState.type == 1) {
				this.navData = [ '客户详情' ]
				this.loading = false
			} else if (this.pageState.type == '征信拆解') {
				this.mask = false
				this.navData = [ this.pageState.type ]
				// this.getForm();
				this.getTable()
				this.loading = false
			} else {
				this.mask = false
				this.navData = [ this.pageState.type ]
				this.getForm()
				this.setReportShow(this.pageState.type)
			}
		})
	}

	ngOnInit() {
		this.getStepResult()
		this.authObj = status.dis.auth
	}
	setReportShow(type) {
		switch (type) {
			case '准入审核':
			case '风控审批':
				this.reportType = 'customer'
				this.reportShow = true
				break
			case '综合审批':
				this.reportType = 'collection'
				this.reportShow = true
				break
			case '风控总监审批':
			case '合规审查':
			case '副总经理审批':
			case '总经理审批':
				this.reportType = 'comprehensive'
				this.reportShow = true
				break
			default:
				break
		}
	}
	getStepResult() {
		this.http.getCustomHeaders('/v1/flow/historic-task/' + this.pageState.taskId).subscribe({
			next: (e) => {
				this.data = e.data
			}
		})
	}

	getForm() {
		this.http.getCustomHeaders('/v1/flow/task/' + this.pageState.taskId + '/variables').subscribe({
			next: (e) => {
				this.claim()
				this.operator = this.cookie.get(status.loginName)
				this.config = e.data.jsonObject.fields
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
				//     "value":""
				//   }
				// ]
				this.loading = false
			},
			error: (err) => (this.loading = false),
			complete: () => (this.loading = false)
		})
	}

	formSubmitted(form: any) {
		let count = 0
		let that = this
		for (let key in form.controls) {
			if (form.controls[key].errors) {
				this.warningBlock.show()
				if (
					form.controls[key].errors.hasOwnProperty('required') ||
					form.controls[key].errors.hasOwnProperty('hasValue')
				) {
					if (form.controls[key].type == 'dayTime') {
						this.warning = this.config[count].name + '不得为空/格式有误'
					} else {
						this.warning = this.config[count].name + '不得为空'
					}
				} else if (form.controls[key].errors.hasOwnProperty('pattern')) {
					this.warning = this.config[count].name + '格式有误'
				}
				return false
			}
			count++
		}
		let formKeys = Object.keys(form.value)
		let formValue = Object.keys(form.value).map(function(key) {
			return form.value[key]
		})
		for (let i = 0; i < formKeys.length; i++) {
			if (this.pageState.type == '预约确认' && formKeys[i] == 'appointTime') {
				form.value[formKeys[i]] = form.value[formKeys[i]].replace(/T/, ' ')
			}
			if (/EndTime/.test(formKeys[i])) {
				var oDate1 = new Date(formValue[i - 1])
				var oDate2 = new Date(formValue[i])
				if (oDate1.getTime() > oDate2.getTime()) {
					this.warningBlock.show()
					this.warning = this.config[i - 1].name + '不得大于' + this.config[i].name
					return
				}
			}
		}
		form.value.action = 'complete'
		// if (this.pageState.type == '征信拆解') {
		//   form.value.self = this.selfObj
		//   form.value.etp = this.etpObj
		// }
		/**提交前询问 */
		this.confirmService.confirm({
			message: '确认提交吗？',
			header: '提示',
			accept: () => {
				that.actualySubmmit(form)
			},
			reject: () => {}
		})
	}
	actualySubmmit(form) {
		this.loading = true
		this.http.postCustomHeaders('/v1/flow/task/' + this.pageState.taskId, form.value).subscribe({
			next: (e) => {
				// if (this.pageState.type == '征信拆解') {
				//   status.dis.etp = {};
				//   status.dis.self = {};
				//   status.disTable.etp = {};
				//   status.disTable.self = {};
				// }
				this.router.navigate([ '/app/present' ], { queryParams: { form: '1', product: this.product } })
			},
			error: (err) => (this.loading = false),
			complete: () => (this.loading = false)
		})
	}
	sure() {
		this.loading = true
		var value = {
			self: this.selfObj,
			etp: this.etpObj,
			action: 'complete',
			allowOrNot: this.authObj.allowOrNot,
			approveRemark: this.authObj.approveRemark
		}
		this.http.postCustomHeaders('/v1/flow/task/' + this.pageState.taskId, value).subscribe({
			next: (e) => {
				status.dis.auth = {}
				status.dis.etp = {}
				status.dis.self = {}
				status.disTable.etp = {}
				status.disTable.self = {}
				this.router.navigate([ '/app/present' ], { queryParams: { form: '1', product: this.product } })
			},
			error: (err) => (this.loading = false),
			complete: () => (this.loading = false)
		})
	}

	claim() {
		this.http.postCustomHeaders('/v1/flow/task/' + this.pageState.taskId, { action: 'claim' }).subscribe(() => {
			this.operator = this.cookie.get(status.loginName)
		})
	}

	getTable() {
		for (let i = 0; i < status.disList.length; i++) {
			if (status.disList[i].taskId == this.pageState.taskId) {
				this.etpObj = status.disList[i].dis.etp
				this.selfObj = status.disList[i].dis.self
			}
		}
		this.operator = this.cookie.get(status.loginName)
	}

	cal() {
		this.router.navigate([ '/app/present' ], { queryParams: { form: '1', product: this.product } })
	}

	comfirm() {
		this.loading = true
		this.http
			.postCustomHeaders('/v1/flow/task/' + this.pageState.taskId, {
				self: this.selfObj,
				etp: this.etpObj,
				action: 'complete'
			})
			.subscribe({
				next: (e) => {
					status.dis.etp = {}
					status.dis.self = {}
					status.disTable.etp = {}
					status.disTable.self = {}
					this.router.navigate([ '/app/present' ], { queryParams: { form: '1', product: this.product } })
				},
				error: (err) => (this.loading = false),
				complete: () => (this.loading = false)
			})
	}

	backDis() {
		this.router.navigate([ '/app/present/comDis' ], {
			queryParams: {
				taskId: this.pageState.taskId,
				processInsId: this.pageState.processInsId,
				type: this.pageState.type,
				product: this.product
			}
		})
	}
}
