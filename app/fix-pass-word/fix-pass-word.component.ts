import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../DAL/students.service';
@Component({
  selector: 'app-fix-pass-word',
  templateUrl: './fix-pass-word.component.html',
  styleUrls: ['./fix-pass-word.component.css']
})
export class FixPassWordComponent implements OnInit {

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
  infoFix = {
    oldPassword: null,
    newPassword: null,
    email: null,
  }
  ngOnInit() {
    this.studentFix = JSON.parse(localStorage.getItem('login'));
  }
  logOut() {
    localStorage.removeItem('login');
  }
  fixPassword(item) {
    if (this.infoFix.oldPassword != this.studentFix[0].password || this.infoFix.email != this.studentFix[0].email)
      alert('Thông tin không đúng')
    else {
      this.studentFix[0].password=this.infoFix.newPassword
      this.studentService.updateStudent(item.key,this.studentFix[0])
    }
  }
}
