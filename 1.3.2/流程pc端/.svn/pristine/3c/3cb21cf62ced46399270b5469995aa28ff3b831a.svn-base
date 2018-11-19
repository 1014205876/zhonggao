import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  config: any;
  group: FormGroup;

  maxLength;

  constructor() { }

  ngOnInit() {
    if(this.config.params&&this.config.params.hasOwnProperty('maxLength')){
      this.maxLength=this.config.params.maxLength;
      
    }
    // for(let i =0;i<this.config.validate.length;i++){
    //   if(this.config.validate[i].length){
    //     this.maxlen=this.config.validate[i].length;
    //   }
    // }
  }

}
