import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleserieComponent } from './detalleserie.component';

describe('DetalleserieComponent', () => {
  let component: DetalleserieComponent;
  let fixture: ComponentFixture<DetalleserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleserieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
