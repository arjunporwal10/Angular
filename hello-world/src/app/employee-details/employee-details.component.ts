import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  template: `
  <h2> Emplyee List</h2>
  <ul *ngFor="let employee of employee">
    <li>{{employee.id}} {{employee.name}} {{employee.age}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  public employee =[]
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = this._employeeService.getEmployees();
  }

}
