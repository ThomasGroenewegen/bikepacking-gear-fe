import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TentTableComponent } from './tent-table.component';

describe('TentTableComponent', () => {
  let component: TentTableComponent;
  let fixture: ComponentFixture<TentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
