import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HttpService } from '../../../shared/http/http.service'


@Component({
	selector: 'app-past-table',
	templateUrl: './past-table.component.html',
	styleUrls: [ './past-table.component.css' ]
})
export class PastTableComponent implements OnInit {
	selfObj

	etpObj

	authObj = {
		allowOrNot: '',
		approveRemark: ''
	}

	assignee

  status
  reportShow = false
	reportType = 'customer'

	public pageState

	public navData = []

	list = []

	constructor(public activeRoute: ActivatedRoute, private http: HttpService) {
		this.activeRoute.queryParams.subscribe((e) => {
      this.pageState = e
      this.setReportShow(e.type)
    })
	}

	ngOnInit() {
		this.activeRoute.queryParams.subscribe((e) => {
			this.pageState = e
			if (this.pageState.type == '1') {
				this.navData = [ '客户详情' ]
			} else if (this.pageState.type == '征信拆解') {
				this.navData = [ '流程详情', '征信拆解' ]
				this.getTable()
			} else {
				this.navData = [ '流程详情', this.pageState.type ]
				this.getFormData()
			}
		})
	}

	getFormData() {
		this.http.getCustomHeaders('/v1/flow/historic-task/' + this.pageState.taskId).subscribe((e) => {
			let data = e.data
			for (var i = 0; i < data.length; i++) {
				if (data[i].assignee) {
					this.assignee = e.data[i].assignee
				}
				if (data[i].status) {
					this.status = e.data[i].status
				}
			}
			this.list = e.data
		})
	}

	getTable() {
		this.http.getCustomHeaders('/v1/flow/process/' + this.pageState.processInsId + '/variables').subscribe((e) => {
			this.assignee = e.data.assignee
			this.status = e.data.status
			if (e.data.etp) {
				this.etpObj = JSON.parse(e.data.etp)
			}
			if (e.data.etp) {
				this.selfObj = JSON.parse(e.data.self)
			}
			this.authObj.allowOrNot = e.data.allowOrNot
			this.authObj.approveRemark = e.data.approveRemark
		})
	}

	ddOutcom() {
		this.http.getExcel('/v1/flow/ddTask/' + this.pageState.processInsId).subscribe((e) => {
			let result = e.blob()
			var blob = new Blob([ result ], {
				type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
			})
			var objectUrl = URL.createObjectURL(blob)
			var a = document.createElement('a')
			document.body.appendChild(a)
			a.setAttribute('style', 'display:none')
			a.setAttribute('href', objectUrl)
			a.setAttribute('download', '尽调报告.xls')
			a.click()
			document.body.removeChild(a)
		})
	}

	regOutcom() {
		this.http.getExcel('/v1/flow/register/' + this.pageState.processInsId).subscribe((e) => {
			let result = e.blob()
			var blob = new Blob([ result ], {
				type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
			})
			var objectUrl = URL.createObjectURL(blob)
			var a = document.createElement('a')
			document.body.appendChild(a)
			a.setAttribute('style', 'display:none')
			a.setAttribute('href', objectUrl)
			a.setAttribute('download', '融资登记报告.xls')
			a.click()
			document.body.removeChild(a)
		})
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
}
