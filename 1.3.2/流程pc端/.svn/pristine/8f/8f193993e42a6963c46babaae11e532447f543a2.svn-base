import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import resource from '../../../shared/app-load/resource'

@Component({
	selector: 'menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: [ './../../../../assets/icon/menu/iconfont.css', './menu-item.component.css' ]
})
export class MenuItemComponent implements OnInit {
	public listSwitch = false
	currentProduct = ''
	@Input() menuItem

	constructor(private router: Router, private activateRoute: ActivatedRoute) {
		this.currentProduct = this.activateRoute.snapshot.queryParams['product']
			? this.activateRoute.snapshot.queryParams['product']
			: resource.menu[0].state
	}

	ngOnInit() {

	}

	showList(e, account) {
		let arr = document.getElementsByClassName('pcodedItem')
		var arr2 = arr[e].getElementsByClassName('subItem')

		if (account || account == 0) {
			this.showMenu(arr2, account)
		} else {
			for (var i = 0; i < arr2.length; i++) {
				arr2[i].classList.remove('active')
			}
			this.showMenu(arr, e)
		}
		arr = null
		arr2 = null
	}
	showMenu(arr, e) {
		let length = arr[e].classList.length
		if (arr[e].classList[length - 1] == 'active') {
			arr[e].classList.remove('active')
		} else {
			for (var i = 0; i < arr.length; i++) {
				arr[i].classList.remove('active')
			}
			arr[e].classList.add('active')
			console.log(e)
		}
	}
}
