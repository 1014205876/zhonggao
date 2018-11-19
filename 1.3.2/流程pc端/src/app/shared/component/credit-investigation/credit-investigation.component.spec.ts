import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditInvestigationComponent } from './credit-investigation.component';

describe('CreditInvestigationComponent', () => {
  let component: CreditInvestigationComponent;
  let fixture: ComponentFixture<CreditInvestigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditInvestigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
