import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenDiaComponent } from './orden-dia.component';

describe('OrdenDiaComponent', () => {
  let component: OrdenDiaComponent;
  let fixture: ComponentFixture<OrdenDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
