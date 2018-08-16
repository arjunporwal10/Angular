import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template: `
  <h2> Emplyee List</h2>
  <ul *ngFor="let employee of employee">
    <li>{{employee.name}}</li>
  </ul>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public employee = []
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = this._employeeService.getEmployees();
  }


}
