import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDaytimeComponent } from './form-daytime.component';

describe('FormDaytimeComponent', () => {
  let component: FormDaytimeComponent;
  let fixture: ComponentFixture<FormDaytimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDaytimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDaytimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
