import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterFormComponent,
    TableComponent
  ],
  exports: [
    RegisterFormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
