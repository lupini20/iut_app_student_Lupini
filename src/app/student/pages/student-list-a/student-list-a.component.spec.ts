import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListAComponent } from './student-list-a.component';

describe('StudentListAComponent', () => {
  let component: StudentListAComponent;
  let fixture: ComponentFixture<StudentListAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
