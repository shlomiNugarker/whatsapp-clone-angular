import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLogoComponent } from './search-logo.component';

describe('SearchLogoComponent', () => {
  let component: SearchLogoComponent;
  let fixture: ComponentFixture<SearchLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
