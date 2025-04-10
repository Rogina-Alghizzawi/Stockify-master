import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateadminComponent } from './crateadmin.component';

describe('CrateadminComponent', () => {
  let component: CrateadminComponent;
  let fixture: ComponentFixture<CrateadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrateadminComponent]
    });
    fixture = TestBed.createComponent(CrateadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
