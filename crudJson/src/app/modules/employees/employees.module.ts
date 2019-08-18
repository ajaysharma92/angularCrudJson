import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeeComponent, EmployeeListComponent],
  exports: [EmployeeComponent, EmployeeListComponent]
})
export class EmployeesModule { }
