import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsScheduleComponent } from './shows-schedule.component';

describe('ShowsScheduleComponent', () => {
  let component: ShowsScheduleComponent;
  let fixture: ComponentFixture<ShowsScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowsScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
