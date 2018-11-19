import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfDisComponent } from './self-dis.component';

describe('SelfDisComponent', () => {
  let component: SelfDisComponent;
  let fixture: ComponentFixture<SelfDisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfDisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
