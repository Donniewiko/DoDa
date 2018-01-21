import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarpanelComponent } from './solarpanel.component';

describe('SolarpanelComponent', () => {
  let component: SolarpanelComponent;
  let fixture: ComponentFixture<SolarpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
