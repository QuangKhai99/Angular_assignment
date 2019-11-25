import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../DAL/students.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  allStudents;

  user = {
    username: null,
    matkhau: null
  };
  userLogin;

  newStudent = {
    birthday: new Date().toISOString().substring(0, 10),
    email: null,
    fullname: null,
    gender: null,
    marks: null,
    password: null,
    schoolfee: null,
    username: null, 
  }
  fpw = {
    username: null,
    matkhau: null,
    email: null,
  }
  isShowPW = false;
  constructor(private studentService: StudentsService, private route: Router) { }

  ngOnInit() {
    this.studentService.allStudentsRef.snapshotChanges().pipe(map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  ).subscribe(a=>{
    this.allStudents=a
  })
    this.getlocalstorage();
  }
  getlocalstorage() {
    let local = JSON.parse(localStorage.getItem('login'));
    if (local == null) {
      this.userLogin;
    } else {
      this.userLogin = local;
    }
  }

  logIn(user) {
    // check username in allStudents, if don't exist return null.
    const accountExist = this.allStudents.filter(p => {
      if (p.username == user.username)
        return p;
    });
    // check username & password
    if (accountExist[0] == null) {
      alert("Tên đăng nhập không tồn tại.");
    } else if (user.matkhau != accountExist[0].password) {
      alert("Mật khẩu không đúng.");

    } else {
      this.userLogin=accountExist;
      localStorage.setItem('login', JSON.stringify(this.userLogin));
      this.route.navigateByUrl('/listsubject');
      alert("Đăng nhập thành công.");
    }
  }
  registration(newStudent) {
  
    const accountExist = this.allStudents.filter(p => {
      if (p.username == newStudent.username)
        return p;
    });
    const emailExist = this.allStudents.filter(p => {
      if (p.username == newStudent.email)
        return p;
    });
    if (accountExist[0] != null) {
      alert("Tên đăng nhập đã tồn tại.");
    }
    else if (emailExist[0] != null) {
      alert("Email đã tồn tại.");
    }
    else {
      if (newStudent.username == null || newStudent.password == null) {
        alert("Vui lòng điền username và password");
      } else {
        this.studentService.addStudent(newStudent)
        alert("Đăng ký thành công.");
        // reset form Registration
        newStudent = {
          birthday: new Date().toISOString().substring(0, 10),
          email: null,
          fullname: null,
          gender: true,
          marks: null,
          password: null,
          schoolfee: null,
          username: null, 
        }
      }
    }
  }
  resetFindPW() {
    this.fpw = {
      username: null,
      matkhau: null,
      email: null,
    }
    this.isShowPW = false;
  }
  findPW() {
    const accountExist = this.allStudents.filter(p => {
      if (p.username == this.fpw.username)
        return p;
    });
    if (accountExist[0] == null) {
      alert("Tên đăng nhập không đúng.");
    }
    else if (this.fpw.email != accountExist[0].email) {
      alert("Email không đúng.");
    }
    else {
      this.fpw.matkhau = accountExist[0].password
      this.isShowPW = true;
    }
  }
}

