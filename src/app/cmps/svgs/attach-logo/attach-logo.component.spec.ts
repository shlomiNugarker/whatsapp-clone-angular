import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachLogoComponent } from './attach-logo.component';

describe('AttachLogoComponent', () => {
  let component: AttachLogoComponent;
  let fixture: ComponentFixture<AttachLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttachLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
