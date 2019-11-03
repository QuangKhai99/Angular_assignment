import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../DAL/students.service';


@Component({
  selector: 'app-fixpassword',
  templateUrl: './fixpassword.component.html',
  styleUrls: ['./fixpassword.component.css']
})
export class FixpasswordComponent implements OnInit {

  constructor(private studentService: StudentsService) { }
  user;
  allStudents;
  studentFix = {
    id: null,
    username: null,
    password: null,
    fullname: null,
    email:null,
    gender: null,
    schoolfee: null,
    marks: null,
    birthday: new Date().toISOString().substring(0, 10),
    mark: null
  }
  ngOnInit() {
    this.allStudents=this.studentService.getAllStudent()
    this.getLocalStorage()
    this.studentFix=this.allStudents.find(p=>p.id=this.user[0].id)
  }
  getLocalStorage(){
    this.user= JSON.parse(localStorage.getItem('login'))[0];
  }
  logOut(){
    localStorage.removeItem('login');
  }
  fixUser(item){
    this.studentService.fixInfo(item)
  }
}
