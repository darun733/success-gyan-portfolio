import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingCards } from './floating-cards';

describe('FloatingCards', () => {
  let component: FloatingCards;
  let fixture: ComponentFixture<FloatingCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
