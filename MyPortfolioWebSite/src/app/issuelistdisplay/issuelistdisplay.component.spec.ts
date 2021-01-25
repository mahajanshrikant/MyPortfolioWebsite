import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuelistdisplayComponent } from './issuelistdisplay.component';

describe('IssuelistdisplayComponent', () => {
  let component: IssuelistdisplayComponent;
  let fixture: ComponentFixture<IssuelistdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuelistdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuelistdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
