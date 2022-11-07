import { Component, Input, OnInit } from '@angular/core';
import { EmployeeList } from './employee';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
  // This is to make an instance particular to this class and
  // not a singleton isntance
})
export class EmployeeComponent implements OnInit {

  


  userType:string = "Admin";
  companyEmployees: EmployeeList[]=[];
  empName: string = "Patrick Gumpert";
  constructor(private employeeServices: EmployeeService) { 

  }

  ngOnInit(): void {
    this.companyEmployees = this.employeeServices.getEmployees();
    console.log('CALLING THE METHOD TO GET THE LIST OF EMPLOYEES FROM THE "DATABASE"');
    console.log(this.companyEmployees);
  }

}
