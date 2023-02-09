import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchchhAppLogoComponent } from './achchh-app-logo.component';

describe('AchchhAppLogoComponent', () => {
  let component: AchchhAppLogoComponent;
  let fixture: ComponentFixture<AchchhAppLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchchhAppLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchchhAppLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
