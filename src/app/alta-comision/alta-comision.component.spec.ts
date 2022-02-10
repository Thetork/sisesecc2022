import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaComisionComponent } from './alta-comision.component';

describe('AltaComisionComponent', () => {
  let component: AltaComisionComponent;
  let fixture: ComponentFixture<AltaComisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaComisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
