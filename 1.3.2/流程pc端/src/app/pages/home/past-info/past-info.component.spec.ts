import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastInfoComponent } from './past-info.component';

describe('PastInfoComponent', () => {
  let component: PastInfoComponent;
  let fixture: ComponentFixture<PastInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
