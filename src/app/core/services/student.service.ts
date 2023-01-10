import { Injectable } from '@angular/core';
import { Student } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: Array<Student> = [];

  constructor() {}

  add(student: Student): void {
    this.students.push(student);
  }

  delete(id: string) {
    this.students = this.students.filter((student) => student.id !== id);
  }
}
