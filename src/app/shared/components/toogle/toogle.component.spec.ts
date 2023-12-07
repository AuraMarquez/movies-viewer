import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleComponent } from './toogle.component';

describe('ToogleComponent', () => {
  let component: ToogleComponent;
  let fixture: ComponentFixture<ToogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToogleComponent]
    });
    fixture = TestBed.createComponent(ToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
