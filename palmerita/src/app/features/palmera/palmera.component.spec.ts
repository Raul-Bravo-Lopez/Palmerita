import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmeraComponent } from './palmera.component';

describe('PalmeraComponent', () => {
  let component: PalmeraComponent;
  let fixture: ComponentFixture<PalmeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalmeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
