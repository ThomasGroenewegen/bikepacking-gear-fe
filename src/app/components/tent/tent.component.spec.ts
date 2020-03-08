import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TentComponent } from './tent.component';

describe('TentComponent', () => {
  let component: TentComponent;
  let fixture: ComponentFixture<TentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
