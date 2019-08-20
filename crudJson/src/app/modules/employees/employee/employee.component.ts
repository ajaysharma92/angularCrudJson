import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private employeeService : EmployeeService
  ) { }

  ngOnInit() {
  }

  createAndUpdate(currentEmployee : Employee){
    console.log(currentEmployee);
    if(currentEmployee.id != null){
      console.log('Update');
      this.updateEmployee(currentEmployee);
    }
    else{
      console.log('Create');
      this.createEmployee(currentEmployee);
    }
  }

  createEmployee(emp:Employee){
    this.employeeService.createEmployee(emp).subscribe();
  }
  updateEmployee(emp:Employee){
    this.employeeService.updateEmployee(emp).subscribe();
  }

  clear(){
    this.employeeService.currentEmployee={
      fname:'',
      lname:'',
      designation:'',
      branch:'',
      id:null
    }
  }

}
