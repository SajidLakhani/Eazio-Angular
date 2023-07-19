import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLeftNavbarComponent } from './dashboard-left-navbar.component';

describe('DashboardLeftNavbarComponent', () => {
  let component: DashboardLeftNavbarComponent;
  let fixture: ComponentFixture<DashboardLeftNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLeftNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLeftNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
