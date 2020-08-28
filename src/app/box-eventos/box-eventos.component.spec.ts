import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxEventosComponent } from './box-eventos.component';

describe('BoxEventosComponent', () => {
  let component: BoxEventosComponent;
  let fixture: ComponentFixture<BoxEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
