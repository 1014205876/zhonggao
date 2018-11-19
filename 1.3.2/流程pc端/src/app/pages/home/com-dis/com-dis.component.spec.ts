import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComDisComponent } from './com-dis.component';

describe('ComDisComponent', () => {
  let component: ComDisComponent;
  let fixture: ComponentFixture<ComDisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComDisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
