import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../DAL/students.service';


@Component({
  selector: 'app-fixpassword',
  templateUrl: './fixpassword.component.html',
  styleUrls: ['./fixpassword.component.css']
})
export class FixpasswordComponent implements OnInit {

  constructor(private studentService: StudentsService) { }
  studentFix = {
    birthday: new Date().toISOString().substring(0, 10),
    email: null,
    fullname: null,
    gender: true,
    marks: null,
    password: null,
    schoolfee: null,
    username: null,
  }
  ngOnInit() {
      console.log(this.studentFix);
      this.studentFix = JSON.parse(localStorage.getItem('login'))
  }
  logOut() {
    localStorage.removeItem('login');
  }
  fixUser(item){
    localStorage.removeItem('login');
    localStorage.setItem('login', JSON.stringify(this.studentFix[0]));
    this.studentService.updateStudent(item.key,this.studentFix[0])
  }
}
