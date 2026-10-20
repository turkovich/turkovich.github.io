import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAlign } from './design-align';

describe('DesignAlign', () => {
  let component: DesignAlign;
  let fixture: ComponentFixture<DesignAlign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignAlign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignAlign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
