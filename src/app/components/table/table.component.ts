import { Component } from '@angular/core';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [],
})
export class TableComponent {
  constructor(public studentService: StudentService) {}

  deleteStudent(id: string): void {
    this.studentService.delete(id);
  }
}
