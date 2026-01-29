import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResume } from './home-resume';

describe('HomeResume', () => {
  let component: HomeResume;
  let fixture: ComponentFixture<HomeResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeResume]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeResume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
