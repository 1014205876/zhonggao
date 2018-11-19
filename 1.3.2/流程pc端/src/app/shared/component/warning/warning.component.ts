import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

@Component({
	selector: 'app-warning',
	templateUrl: './warning.component.html',
	styleUrls: [ './warning.component.css' ]
})
export class WarningComponent implements OnInit {
	isShow: Boolean

	@Input() warning: String

	constructor() {}

	ngOnInit() {}

	show() {
		this.isShow = true
	}

	hide() {
		this.isShow = false
	}
}
