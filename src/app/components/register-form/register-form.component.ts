import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  save() {}

  isTheFieldInvalid(control: string) {
    return (
      this.registerForm?.controls[control]?.['errors'] &&
      this.registerForm?.controls[control]?.['touched']
    );
  }
}
