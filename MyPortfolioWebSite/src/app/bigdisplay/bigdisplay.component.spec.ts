import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigdisplayComponent } from './bigdisplay.component';

describe('BigdisplayComponent', () => {
  let component: BigdisplayComponent;
  let fixture: ComponentFixture<BigdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
