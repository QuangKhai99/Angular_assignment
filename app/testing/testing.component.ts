import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../DAL/subjects.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { StudentsService } from '../DAL/students.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  user = {
    birthday: new Date().toISOString().substring(0, 10),
    email: null,
    fullname: null,
    gender: true,
    marks: null,
    password: null,
    schoolfee: null,
    username: null,
  }
  allQuizzesRef: AngularFireList<any>;
  allQuizzes: Observable<any[]>;
  list: any;
  id;//id subject
  subject;// id sau khi so sanh voi id subject
  questions;//tat ca cau hoi
  answers = [];// cau tra loi cua nguoi dung
  mark=0;
  answerId: number = -1;
  constructor(private route: ActivatedRoute, private router: Router, private subjectsService: SubjectsService, private studentService: StudentsService, private db: AngularFireDatabase, private http: HttpClient) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('login'))

    this.route.paramMap.subscribe(para => {
      this.id = para.get('Id')
    })
    this.subjectsService.allSubjects.subscribe(item => {
      this.list = item
      this.list.filter(element => {
        if (element.Id === this.id)
          this.subject = element
      });
    })

    // this.allQuizzesRef = this.db.list(`Quizzes`)
    // this.allQuizzes = this.allQuizzesRef.snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    //   )
    // );
    // this.allQuizzes.subscribe(a => {
    // this.questions = a
    //   console.log(this.questions);
    // })
    this.http.get(`../assets/Quizs/${this.id}.js`).subscribe(data => {
      this.questions = data;
    })
    this.timeCountDown(5, 1)
  }

  itemOnPage: number = 1;
  page: number = 1;

  nextPage() {
    if (this.answerId == -1)
      alert("Bạn chưa chọn câu trả lời")
    else {
      if(this.page==this.questions.length)
        this.nopBai(this.user[0])
      if (this.questions.length / this.itemOnPage > this.page)
        this.page++
      this.answers.push(this.answerId)
      this.answerId = -1
    }
  }
  prePage() {
    if (this.page > 1)
      this.page--
    this.answers.pop()
  }

  logOut() {
    localStorage.removeItem('login');
  }
  timeCountDown(min: number, sec: number) {
    document.getElementById("timeCountDown").innerHTML = min + " : " + sec;
    clearInterval(set);
    var set = setInterval(function () {
      if (min > 0) {
        sec -= 1;
        if (sec < 0) {
          min -= 1;
          sec = 59;
          document.getElementById("timeCountDown").innerHTML = min + " : " + sec;
        }
        document.getElementById("timeCountDown").innerHTML = min + " : " + sec;
      }
      if (min == 0) {
        if (sec >= 0) {
          sec -= 1
        }
        if (sec = -1) {
          this.nopBai(this.user[0])
        }
        document.getElementById("timeCountDown").innerHTML = min + " : " + sec;
      }
      document.getElementById("timeCountDown").innerHTML = min + " : " + sec;
    }, 1000);
  }

  nopBai(item) {
    for (let i = 0; i < this.questions.length; i++) {
      if(this.answers[i]==null)
        this.answers[i]=0  
      if (this.questions[i].AnswerId==this.answers[i]) {
        this.mark = this.mark + this.questions[i].Marks
      }
    }
    alert('Điểm tổng kết của bạn là: ' + this.mark)
    this.router.navigateByUrl('/listsubject');
    this.studentService.updateMark(item.key, this.mark)
  }
}
