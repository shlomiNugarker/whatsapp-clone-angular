import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLogoComponent } from './filter-logo.component';

describe('FilterLogoComponent', () => {
  let component: FilterLogoComponent;
  let fixture: ComponentFixture<FilterLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
