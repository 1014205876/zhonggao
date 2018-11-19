import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurFlowComponent } from './cur-flow.component';

describe('CurFlowComponent', () => {
  let component: CurFlowComponent;
  let fixture: ComponentFixture<CurFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
