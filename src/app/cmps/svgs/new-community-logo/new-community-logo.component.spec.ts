import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommunityLogoComponent } from './new-community-logo.component';

describe('NewCommunityLogoComponent', () => {
  let component: NewCommunityLogoComponent;
  let fixture: ComponentFixture<NewCommunityLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCommunityLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCommunityLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
