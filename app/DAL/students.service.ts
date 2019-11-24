import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  allStudentsRef: AngularFireList<any>;
  allStudents;

  constructor(private db: AngularFireDatabase) {
    this.allStudentsRef = db.list('Students');
    this.allStudentsRef.valueChanges().subscribe(data => {
      this.allStudents= data;    
    });
  }
  addStudent(item) {
    this.allStudentsRef.push(item);
  }
  updateStudent(key,item){
    this.allStudentsRef.update(key,{'password':item.password,'gender':item.gender,'fullname':item.fullname,'birthday':item.birthday});
    alert('Thay đổi thành công')
  }
  updateMark(key,item){
    this.allStudentsRef.update(key,{'marks':item})
  }
}
