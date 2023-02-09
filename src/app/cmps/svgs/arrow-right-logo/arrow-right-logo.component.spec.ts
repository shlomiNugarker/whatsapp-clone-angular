import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowRightLogoComponent } from './arrow-right-logo.component';

describe('ArrowRightLogoComponent', () => {
  let component: ArrowRightLogoComponent;
  let fixture: ComponentFixture<ArrowRightLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowRightLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowRightLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
