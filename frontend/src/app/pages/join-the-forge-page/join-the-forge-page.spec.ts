import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTheForgePage } from './join-the-forge-page';

describe('JoinTheForgePage', () => {
  let component: JoinTheForgePage;
  let fixture: ComponentFixture<JoinTheForgePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinTheForgePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinTheForgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
