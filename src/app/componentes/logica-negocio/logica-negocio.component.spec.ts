import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicaNegocioComponent } from './logica-negocio.component';

describe('LogicaNegocioComponent', () => {
  let component: LogicaNegocioComponent;
  let fixture: ComponentFixture<LogicaNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicaNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicaNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
