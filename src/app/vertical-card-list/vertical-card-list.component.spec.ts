import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCardListComponent } from './vertical-card-list.component';

describe('VerticalCardListComponent', () => {
  let component: VerticalCardListComponent;
  let fixture: ComponentFixture<VerticalCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
