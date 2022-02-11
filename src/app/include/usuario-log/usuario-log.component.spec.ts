import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioLogComponent } from './usuario-log.component';

describe('UsuarioLogComponent', () => {
  let component: UsuarioLogComponent;
  let fixture: ComponentFixture<UsuarioLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
