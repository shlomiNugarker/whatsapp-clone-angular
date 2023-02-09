import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeGreenMsgLogoComponent } from './edge-green-msg-logo.component';

describe('EdgeGreenMsgLogoComponent', () => {
  let component: EdgeGreenMsgLogoComponent;
  let fixture: ComponentFixture<EdgeGreenMsgLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeGreenMsgLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdgeGreenMsgLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
