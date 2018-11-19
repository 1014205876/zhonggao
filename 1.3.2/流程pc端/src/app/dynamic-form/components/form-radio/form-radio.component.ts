import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.css']
})
export class FormRadioComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
    this.config.options.map(e=>{
      if(e.checked){
        this.group.controls[this.config.id].setValue(e.value)
      }
    })
    
  }

  asd(){
    
  }

}
