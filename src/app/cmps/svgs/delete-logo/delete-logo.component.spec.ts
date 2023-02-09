import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLogoComponent } from './delete-logo.component';

describe('DeleteLogoComponent', () => {
  let component: DeleteLogoComponent;
  let fixture: ComponentFixture<DeleteLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
