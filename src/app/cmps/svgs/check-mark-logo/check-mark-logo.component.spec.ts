import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMarkLogoComponent } from './check-mark-logo.component';

describe('CheckMarkLogoComponent', () => {
  let component: CheckMarkLogoComponent;
  let fixture: ComponentFixture<CheckMarkLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMarkLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckMarkLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
