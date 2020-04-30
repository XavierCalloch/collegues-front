import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AProposComponent } from './apropos.component';

describe('AProposComponent', () => {
  let component: AProposComponent;
  let fixture: ComponentFixture<AProposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AProposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
