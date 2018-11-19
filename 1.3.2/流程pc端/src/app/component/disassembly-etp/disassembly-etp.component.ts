import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'disassembly-etp',
  templateUrl: './disassembly-etp.component.html',
  styleUrls: ['./disassembly-etp.component.css']
})
export class DisassemblyEtpComponent implements OnInit {

  @Input() obj;

  constructor() { }

  ngOnInit() {
  }

}
