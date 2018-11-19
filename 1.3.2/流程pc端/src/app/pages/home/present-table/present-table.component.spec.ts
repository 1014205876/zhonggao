import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentTableComponent } from './present-table.component';

describe('PresentTableComponent', () => {
  let component: PresentTableComponent;
  let fixture: ComponentFixture<PresentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
