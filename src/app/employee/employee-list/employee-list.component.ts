import { Component, Input, OnInit } from '@angular/core';
import { EmployeeList } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() employees:Array<EmployeeList>=[];

  constructor() { }

  ngOnInit(): void {
    console.log("INITIALIZING EMPLOYEELISTCOMPONENT");
    console.log(this.employees);
  }

}
