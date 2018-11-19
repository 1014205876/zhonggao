import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'read-only-block',
  templateUrl: './read-only-block.component.html',
  styleUrls: ['./read-only-block.component.css']
})
export class ReadOnlyBlockComponent implements OnInit {

  @Input()
  list;

  constructor() { }

  ngOnInit() {
  }

  getKeys(item) {
    return Object.keys(item);
  }

  getType(type?: String) {
    if(type){
      if (type.indexOf('url')!=-1) {
        return 'url';
      }
      if (type.indexOf('image')!=-1) {
        return 'image';
      }
    }
  }

  bigImg(){
    
  }

}
