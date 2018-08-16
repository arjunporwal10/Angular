import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string ="assets/data/employees.json"

  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
       }
}
