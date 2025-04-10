import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffApprovalComponent } from './staff-approval.component';

describe('StaffApprovalComponent', () => {
  let component: StaffApprovalComponent;
  let fixture: ComponentFixture<StaffApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffApprovalComponent]
    });
    fixture = TestBed.createComponent(StaffApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
