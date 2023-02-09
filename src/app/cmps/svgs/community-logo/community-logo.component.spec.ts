import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityLogoComponent } from './community-logo.component';

describe('CommunityLogoComponent', () => {
  let component: CommunityLogoComponent;
  let fixture: ComponentFixture<CommunityLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
