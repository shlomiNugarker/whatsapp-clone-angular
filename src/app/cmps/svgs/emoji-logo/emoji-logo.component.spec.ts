import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiLogoComponent } from './emoji-logo.component';

describe('EmojiLogoComponent', () => {
  let component: EmojiLogoComponent;
  let fixture: ComponentFixture<EmojiLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojiLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
