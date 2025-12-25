import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UntilWeWinPage } from './until-we-win-page';

describe('UntilWeWinPage', () => {
  let component: UntilWeWinPage;
  let fixture: ComponentFixture<UntilWeWinPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UntilWeWinPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UntilWeWinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
