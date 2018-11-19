import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisassemblyAuthComponent } from './disassembly-auth.component';

describe('DisassemblyAuthComponent', () => {
  let component: DisassemblyAuthComponent;
  let fixture: ComponentFixture<DisassemblyAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisassemblyAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisassemblyAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
