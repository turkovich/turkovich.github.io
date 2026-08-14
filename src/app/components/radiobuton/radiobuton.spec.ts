import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Radiobuton } from './radiobuton';

describe('Radiobuton', () => {
  let component: Radiobuton;
  let fixture: ComponentFixture<Radiobuton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Radiobuton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Radiobuton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
