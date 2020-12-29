import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee';
import { EmployeeRestApiService } from '../shared/employee-rest-api.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails : Employee = { name: '', email:'', cellphone:'', address:'', code:0, status: false};

  constructor(private empApiService: EmployeeRestApiService) { }

  ngOnInit(): void {
  }

  createEmployee() {
    this.empApiService.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      console.log(data);
    })
  }
}
