import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoothAssets } from './booth-assets';

describe('BoothAssets', () => {
  let component: BoothAssets;
  let fixture: ComponentFixture<BoothAssets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoothAssets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoothAssets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
