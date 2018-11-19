import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'img-watcher',
  templateUrl: './img-watcher.component.html',
  styleUrls: ['./img-watcher.component.css']
})
export class ImgWatcherComponent implements OnInit {

  @Input()
  src;

  show=false;

  constructor() { }

  ngOnInit() {
  }

}
