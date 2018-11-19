import { Component, OnInit, Input } from '@angular/core'

@Component({
	selector: 'app-table-define',
	templateUrl: './table-define.component.html',
	styleUrls: [ './table-define.component.css' ]
})
export class TableDefineComponent implements OnInit {
	@Input() list = []
	@Input() col = 2
	cols = []
	constructor() {}
	ngOnInit() {
		for (let i = 0; i < this.col; i++) {
			this.cols.push(i)
		}
	}
}
