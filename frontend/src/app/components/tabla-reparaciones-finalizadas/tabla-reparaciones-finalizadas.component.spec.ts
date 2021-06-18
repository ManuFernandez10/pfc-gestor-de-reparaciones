/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TablaReparacionesFinalizadasComponent } from './tabla-reparaciones-finalizadas.component';

describe('TablaReparacionesFinalizadasComponent', () => {
  let component: TablaReparacionesFinalizadasComponent;
  let fixture: ComponentFixture<TablaReparacionesFinalizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaReparacionesFinalizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaReparacionesFinalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
