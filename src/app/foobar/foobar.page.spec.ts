import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoobarPage } from './foobar.page';

describe('FoobarPage', () => {
  let component: FoobarPage;
  let fixture: ComponentFixture<FoobarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoobarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoobarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
