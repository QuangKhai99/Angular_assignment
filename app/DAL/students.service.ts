import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private http: HttpClient) {
  }
  sosanh;
  students=[];
  student;
  getHttpStudents() {
    return this.http.get<Student[]>(`../../assets/Students.js`);
  }
  addAllStudents(item) {
    // console.log(this.students);
    // if (this.students != []) {
    //   this.sosanh = this.students.filter(p => {
    //     if (item.id === p.id) {
    //       return p;
    //     }
    //   })
    // }   
    
    // if (this.students == []) {
    //   this.students.push(item);
    // } else if (this.sosanh) {
    //   return;
    // } else {
    //   this.students.push(item);
    // }
    
      this.students.push(item);
  }
  // addF(item){
  //   if(this.students!=[]){
  //     this.students.push(item)
  //   }
  // }
  getAllStudent() {
    return this.students
  }
  fixInfo(item){
    for(let i=0;i<this.students.length;i++){
      if(this.students[i].id===item.id){
        this.students[i].password=item.password
        this.students[i].fullname=item.fullname
        this.students[i].gender=item.gender
        this.students[i].birthday=item.birthday
      }
    }
    alert('Thay đổi thông tin thành công.')
  }
}
