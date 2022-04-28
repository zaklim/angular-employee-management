import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService : EmployeeService, private route : ActivatedRoute) { }

  employee! : Employee;

  ngOnInit(): void {
    this.employeeService.getEmployeeById(this.route.snapshot.params['id']).subscribe(data => {
      this.employee = data;
    })
  }

}
