import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL : string = "http://localhost:8080/employee-management/api/v1/employees";
  constructor(private httpClient : HttpClient) { }

  getEmployeeList() : Observable<Employee[]>{
      return this.httpClient.get<Employee[]>(this.baseURL);
  }

  createEmployee(employee : Employee) : Observable<Object>{
    return this.httpClient.post(this.baseURL, employee);
  }

  updateEmployee(id : number, employee : Employee) : Observable<Object>{
    return this.httpClient.put(this.baseURL + "/" + id, employee);
  }

  getEmployeeById(id : number) : Observable<Employee> {
    return this.httpClient.get<Employee>(this.baseURL + "/" + id);
  }

  deleteEmployeeById(id : number) : Observable<Object> {
    return this.httpClient.delete<Employee>(this.baseURL + "/" + id);
  }
  
}
