import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisassemblyComponent } from './disassembly.component';
import { TableComponent } from './component/table/table.component';
import { FormsModule } from '@angular/forms';
import { Table1Component } from './component/table1/table1.component';
import { TextInputComponent } from './component/text-input/text-input.component';
import { NumInputComponent } from './component/num-input/num-input.component';
import { SelectComponent } from './component/select/select.component';
import { DeepCopyService } from './service/deep-copy.service';
import { InputNgModelDirective } from './directive/input-ng-model.directive';
import { DateInputComponent } from './component/date-input/date-input.component';
import { ValideService } from './service/valide.service';
import { DisassemblyValueService } from './service/disassembly-value.service';
import { NormalTableComponent } from './component/normal-table/normal-table.component';
import { LoanTableComponent } from './component/loan-table/loan-table.component';
import { RadioComponent } from './component/radio/radio.component';
import { AddTableComponent } from './component/add-table/add-table.component';
import { RandomStringService } from './service/random-string.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[DisassemblyComponent],
  declarations: [DisassemblyComponent, TableComponent, Table1Component, TextInputComponent, NumInputComponent, SelectComponent, InputNgModelDirective, DateInputComponent, NormalTableComponent, LoanTableComponent, RadioComponent, AddTableComponent],
  providers:[DeepCopyService,ValideService,DisassemblyValueService,RandomStringService]
})
export class DisassemblyModule { }
