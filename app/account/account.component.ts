import { Component, OnInit } from '@angular/core';
import { Student } from '../students';
import { StudentsService } from '../DAL/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  user = {
    username: null,
    matkhau: null
  };

  userLogin;

  newStudent = {
    id: 0,
    username: '',
    password: '',
    fullname: '',
    email: '',
    gender: '',
    schoolfee: 0,
    marks: 0,
    birthday: new Date().toISOString().substring(0, 10),
    mark: 0
  }
  firstStudents;
  allStudents;

  fpw = {
    username: null,
    matkhau: null,
    email: null,
  }
  isShowPW = false;
  constructor(private studentService: StudentsService, private route: Router) { }

  ngOnInit() {
    this.studentService.getHttpStudents().subscribe((res: Student[]) => {
      this.firstStudents = res;
      for (let i = 0; i < this.firstStudents.length; i++) {
        this.studentService.addAllStudents(this.firstStudents[i])
      }
    })
    this.getlocalstorage();
    this.allStudents=this.studentService.getAllStudent()
  }

  getlocalstorage() {
    let local = JSON.parse(localStorage.getItem('login'));
    if (local == null) {
      this.userLogin = [];
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
      this.userLogin.push(accountExist);
      localStorage.setItem('login', JSON.stringify(this.userLogin));
      this.route.navigateByUrl('/listsubject');
      alert("Đăng nhập thành công.");
    }
  }
  registration(newStudent) {
    console.log('allStudents',this.allStudents);
    
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
      if (newStudent.username == '' || newStudent.password == '') {
        alert("Vui lòng điền username và password");
       } else {
        newStudent.id = this.allStudents.length + 1;
        this.studentService.addAllStudents(newStudent)
        alert("Đăng ký thành công.");
        // reset form Registration
        this.newStudent = {
          id: 0,
          username: '',
          password: '',
          fullname: '',
          email: '',
          gender: '',
          schoolfee: 0,
          marks: 0,
          birthday: new Date().toISOString().substring(0, 10),
          mark: 0
        }
      }
    }
  }
  resetFPW() {
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

