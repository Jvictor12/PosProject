import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRouteComponent } from './sub-route.component';

describe('SubRouteComponent', () => {
  let component: SubRouteComponent;
  let fixture: ComponentFixture<SubRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubRouteComponent]
    });
    fixture = TestBed.createComponent(SubRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
