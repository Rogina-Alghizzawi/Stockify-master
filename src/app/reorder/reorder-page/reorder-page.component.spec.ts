import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorderPageComponent } from './reorder-page.component';

describe('ReorderPageComponent', () => {
  let component: ReorderPageComponent;
  let fixture: ComponentFixture<ReorderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReorderPageComponent]
    });
    fixture = TestBed.createComponent(ReorderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
