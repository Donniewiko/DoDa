import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerusageComponent } from './powerusage.component';

describe('PowerusageComponent', () => {
  let component: PowerusageComponent;
  let fixture: ComponentFixture<PowerusageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerusageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerusageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
