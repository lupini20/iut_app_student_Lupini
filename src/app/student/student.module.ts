import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SharedModule } from '../shared/shared.module';
import { StudentListAComponent } from './pages/student-list-a/student-list-a.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { StudentCardComponent } from './components/student-card/student-card.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentListAComponent,
    StudentListComponent,
    StudentFormComponent,
    StudentDetailsComponent,
    StudentCardComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
