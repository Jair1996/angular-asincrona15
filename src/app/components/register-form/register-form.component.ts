import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getId } from 'src/app/core/helpers';
import { Student } from 'src/app/core/interfaces';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styles: [],
})
export class RegisterFormComponent {
  @ViewChild('registerForm') registerForm!: NgForm;

  initForm = {
    nombre: '',
    apellido: '',
    carrera: '',
  };

  constructor(private studenService: StudentService) {}

  save() {
    const student: Student = { id: getId(), ...this.initForm };

    this.studenService.add(student);

    this.registerForm.reset()
  }

  isTheFieldInvalid(control: string) {
    return (
      this.registerForm?.controls[control]?.['errors'] &&
      this.registerForm?.controls[control]?.['touched']
    );
  }
}
