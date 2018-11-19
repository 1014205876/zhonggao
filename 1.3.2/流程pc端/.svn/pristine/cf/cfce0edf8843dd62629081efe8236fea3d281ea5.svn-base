import { Component, OnInit } from '@angular/core'
import { HttpService } from '../../../shared/http/http.service'
import { ActivatedRoute } from '@angular/router'
import { arabiaToSimplifiedChinese } from '../../../../assets/ts/util'

@Component({
	selector: 'app-report',
	templateUrl: './report.component.html',
	styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
	tabsNo=0;
	loading = false
	data = null
	title = '信息采集报告'
	navData = []
	queryParam = null
	message = null
	etpObj;
	selfObj;
	DDdata;
	constructor(private http: HttpService, private activeRoute: ActivatedRoute) { }

	ngOnInit() {
		this.queryParam = this.activeRoute.snapshot.queryParams;
		this.getPageDate();
		this.getTable();
		this.getDD();
	}

	getReportData(param) {
		this.loading = true
		// let url = '/report' + '/v1/flow/' + param.type + '/' + param.processId // 测试url
		let url = '/v1/flow/' + param.type + '/' + param.processId;
		this.http.getReportData(url).subscribe((res) => {
			if (res.code === '200') {
				this.data = res.data
			} else {
				this.message = res.msg
			}
		}, err => {
			this.loading = false
		}, () => {
			this.loading = false
		})
	}
	getPageDate() {
		switch (this.queryParam.reportType) {
			case 'customer':
				this.title = '客户信息报告'
				break
			case 'collection':
				this.title = '信息采集报告'
				break
			case 'comprehensive':
				this.title = '综合审批报告'
				break
			default:
				break
		}
		this.navData = [this.queryParam.type, '查看报告']
		this.getReportData({ processId: this.queryParam.processId, type: this.queryParam.reportType })
	}
	getTable() {
		this.http.getCustomHeaders('/v1/flow/process/' + this.queryParam.processId + '/variables').subscribe((e) => {
			if (e.data.etp) {
				this.etpObj = JSON.parse(e.data.etp)
			}
			if (e.data.etp) {
				this.selfObj = JSON.parse(e.data.self)
			}
		})
	}

	getDD(){
		this.http.getCustomHeaders('/v1/flow/process/' + this.queryParam.processId + '/ddData').subscribe(e=>{
			this.DDdata=e.result.blockList;
			console.log()
		})
	}
	numberTranform(num) {
		return arabiaToSimplifiedChinese(num)
	}
}
