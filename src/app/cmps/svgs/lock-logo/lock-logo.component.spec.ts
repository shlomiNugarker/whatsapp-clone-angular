import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockLogoComponent } from './lock-logo.component';

describe('LockLogoComponent', () => {
  let component: LockLogoComponent;
  let fixture: ComponentFixture<LockLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
