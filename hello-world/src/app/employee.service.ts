import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [
      {"id":1, "name":"Andrew", "age":30},
      {"id":2, "name":"And", "age":20},
      {"id":3, "name":"rew", "age":10},
      {"id":4, "name":"ndre", "age":40}
    ];
  }
}
