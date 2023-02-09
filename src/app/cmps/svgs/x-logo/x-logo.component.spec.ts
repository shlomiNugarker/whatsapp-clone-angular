import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XLogoComponent } from './x-logo.component';

describe('XLogoComponent', () => {
  let component: XLogoComponent;
  let fixture: ComponentFixture<XLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
