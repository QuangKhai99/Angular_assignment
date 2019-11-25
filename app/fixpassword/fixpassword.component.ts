import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../DAL/students.service';



@Component({
  selector: 'app-fixpassword',
  templateUrl: './fixpassword.component.html',
  styleUrls: ['./fixpassword.component.css']
})
export class FixpasswordComponent implements OnInit {

  constructor(private studentService: StudentsService) { }
  key;
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
    this.studentFix = JSON.parse(localStorage.getItem('login'))
    if (this.studentFix[0] == undefined) {
      this.studentFix[0] = this.studentFix
    }
    if (JSON.parse(localStorage.getItem('key')) == null) {
      this.key = this.studentFix[0].key
      localStorage.setItem('key', JSON.stringify(this.key));
    }
    else
      this.key = JSON.parse(localStorage.getItem('key'))
    console.log(this.studentFix);
    console.log(this.studentFix[0]);
  }
  logOut() {
    localStorage.removeItem('login');
    localStorage.removeItem('key');
  }
  fixUser() {
    localStorage.removeItem('login');
    localStorage.setItem('login', JSON.stringify(this.studentFix[0]));
    this.studentService.updateStudent(this.key, this.studentFix[0])
  }
}
