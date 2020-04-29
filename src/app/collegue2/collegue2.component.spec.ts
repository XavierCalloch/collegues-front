import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Collegue2Component } from './collegue2.component';

describe('Collegue2Component', () => {
  let component: Collegue2Component;
  let fixture: ComponentFixture<Collegue2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Collegue2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Collegue2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
