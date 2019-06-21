import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees()
  {
   return [
    {"id": 1, "name": "First" , "Age":25},
    {"id": 2, "name": "Second" , "Age":27},
    {"id": 3, "name": "Third" , "Age":26},
    {"id": 4, "name": "Fourth" , "Age":28}
    ]
  }
  
getStudents()
{
  return [
    {"id": 1, "name": "student1" , "Class":4},
    {"id": 2, "name": "student2" , "Class":7},
    {"id": 3, "name": "student3" , "Class":3},
    {"id": 4, "name": "student4" , "Class":9}
  ];
  }
}
