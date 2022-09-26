import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuestsComponent } from './reuests.component';

describe('ReuestsComponent', () => {
  let component: ReuestsComponent;
  let fixture: ComponentFixture<ReuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
