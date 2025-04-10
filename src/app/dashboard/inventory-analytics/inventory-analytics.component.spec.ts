import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAnalyticsComponent } from './inventory-analytics.component';

describe('InventoryAnalyticsComponent', () => {
  let component: InventoryAnalyticsComponent;
  let fixture: ComponentFixture<InventoryAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryAnalyticsComponent]
    });
    fixture = TestBed.createComponent(InventoryAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
