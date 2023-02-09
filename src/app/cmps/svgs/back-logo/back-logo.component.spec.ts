import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackLogoComponent } from './back-logo.component';

describe('BackLogoComponent', () => {
  let component: BackLogoComponent;
  let fixture: ComponentFixture<BackLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
