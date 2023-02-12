import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IneligibleComponent } from './ineligible.component';

describe('IneligibleComponent', () => {
  let component: IneligibleComponent;
  let fixture: ComponentFixture<IneligibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IneligibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IneligibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
