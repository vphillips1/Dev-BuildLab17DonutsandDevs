import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutsViewComponent } from './donuts-view.component';

describe('DonutsViewComponent', () => {
  let component: DonutsViewComponent;
  let fixture: ComponentFixture<DonutsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
