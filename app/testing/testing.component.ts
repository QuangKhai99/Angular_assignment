import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../DAL/subjects.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentsService } from '../DAL/students.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  user;
  allQuizzesRef: AngularFireList<any>;
  allQuizzes: Observable<any[]>;
  list: any;
  id;//id subject
  subject;// id sau khi so sanh voi id subject
  questions;//tat ca cau hoi
  answers = [];// cau tra loi cua nguoi dung
  mark: number;
  answerId: number = -1;
  constructor(private route: ActivatedRoute, private subjectsService: SubjectsService, private studentService: StudentsService, private db: AngularFireDatabase, private http: HttpClient) { }

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
      if (this.questions.length / this.itemOnPage > this.page)
        this.page++
      this.answers.push(this.answerId)
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
        if (sec > 0) {
          sec -= 1
        }
        if (sec == 0) {
          this.nopBai()
        }
        document.getElementById("timeCountDown").innerHTML = min + " : " + sec;
      }
      document.getElementById("timeCountDown").innerHTML = min + " : " + sec;
    }, 1000);
  }

  nopBai() {
    if (this.questions.length != this.answers.length)
      alert("Bạn chưa làm xong bài")
    else {
      for (let i = 0; i < this.questions.length; i++) {
        if (this.questions[i].AnswerId == this.answers[i]) {
          console.log(this.questions[i].AnswerId);
          console.log(this.answers[i]);
          this.mark = this.mark + this.questions[i].Marks
        }
      }
      alert('Điểm tổng kết của bạn là: ' + this.mark)
      this.studentService.updateMark(this.user.key, this.mark)
    }
  }
}
