import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTentComponent } from './selected-tent.component';

describe('SelectedTentComponent', () => {
  let component: SelectedTentComponent;
  let fixture: ComponentFixture<SelectedTentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
