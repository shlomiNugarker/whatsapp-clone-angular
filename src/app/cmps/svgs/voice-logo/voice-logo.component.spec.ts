import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceLogoComponent } from './voice-logo.component';

describe('VoiceLogoComponent', () => {
  let component: VoiceLogoComponent;
  let fixture: ComponentFixture<VoiceLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
