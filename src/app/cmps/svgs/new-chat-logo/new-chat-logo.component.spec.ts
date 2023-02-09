import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChatLogoComponent } from './new-chat-logo.component';

describe('NewChatLogoComponent', () => {
  let component: NewChatLogoComponent;
  let fixture: ComponentFixture<NewChatLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewChatLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewChatLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
