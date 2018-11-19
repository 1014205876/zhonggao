import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDefineComponent } from './table-define.component';

describe('TableDefineComponent', () => {
  let component: TableDefineComponent;
  let fixture: ComponentFixture<TableDefineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDefineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
