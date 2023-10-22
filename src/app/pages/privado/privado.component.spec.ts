import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadoComponent } from './privado.component';

describe('PrivadoComponent', () => {
  let component: PrivadoComponent;
  let fixture: ComponentFixture<PrivadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivadoComponent]
    });
    fixture = TestBed.createComponent(PrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
