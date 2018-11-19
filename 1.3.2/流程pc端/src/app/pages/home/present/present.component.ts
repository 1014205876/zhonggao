import { state } from '@angular/animations'
import { HttpService } from './../../../shared/http/http.service'
import { Component, OnInit, HostBinding, ChangeDetectorRef } from '@angular/core'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'
import { leaveRouteAnimate } from '../../../shared/animation/leaveRouteAnimate'
import status from '../../../shared/state'
import resource from '../../../shared/app-load/resource'

@Component({
	selector: 'app-present',
	templateUrl: './present.component.html',
	styleUrls: [ './present.component.css' ],
	animations: [ leaveRouteAnimate ],
	host: {
		style: 'height:calc(100% - 30px);'
	}
})
export class PresentComponent implements OnInit {
	mask
	row
	//loading动画
	loading
	// 定义路由动画
	@HostBinding('@leaveRouteAnimate') state
	routerStateCode = 'enter'
	public totalPage
	public rows = []

	pageState
	product

	constructor(
		private activeRoute: ActivatedRoute,
		private routeInfo: ActivatedRoute,
		private router: Router,
		private http: HttpService,
		public changeDetectorRef: ChangeDetectorRef
	) {
		this.activeRoute.queryParams.subscribe((e) => {
			this.pageState = e
			this.product = this.pageState.product ? this.pageState.product : resource.menu[0].state
			this.search()
		})
	}

	ngOnInit() {
		// this.search();
	}
	changePage(e) {
		this.search()
	}

	search() {
		this.loading = true
		this.http.getCustomHeaders('/v1/flow/task/' + this.product).subscribe({
			next: (e) => {
				this.changeDetectorRef.markForCheck()
				this.changeDetectorRef.detectChanges()
				this.rows = e.data
			},
			error: (err) => (this.loading = false),
			complete: () => (this.loading = false)
		})
	}

	claim() {
		this.http.postCustomHeaders('/v1/flow/task/' + this.row.taskId, { action: 'claim' }).subscribe(() => {
			if (this.row.actName == '征信拆解') {
				this.router.navigate([ '/app/present/authCheck' ], {
					queryParams: {
						taskId: this.row.taskId,
						processInsId: this.row.processInsId,
						type: this.row.actName,
						product: this.product
					}
				})
			} else {
				this.router.navigate([ '/app/present/presentTable' ], {
					queryParams: {
						taskId: this.row.taskId,
						processInsId: this.row.processInsId,
						type: this.row.actName,
						product: this.product
					}
				})
			}
		})
	}
}
