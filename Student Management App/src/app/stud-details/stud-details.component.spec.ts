import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudDetailsComponent } from './stud-details.component';

describe('StudDetailsComponent', () => {
  let component: StudDetailsComponent;
  let fixture: ComponentFixture<StudDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
