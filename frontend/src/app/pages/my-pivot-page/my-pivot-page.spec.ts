import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPivotPage } from './my-pivot-page';

describe('MyPivotPage', () => {
  let component: MyPivotPage;
  let fixture: ComponentFixture<MyPivotPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPivotPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPivotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
