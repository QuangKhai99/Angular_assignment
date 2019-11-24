import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../DAL/subjects.service';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  allQuizzesRef: AngularFireList<any>;
  allQuizzes:Observable<any[]>;
  list: any;
  id;//id subject
  questions;
  answers = [];
  subject;// id sau khi so sanh voi id subject

  constructor(private route: ActivatedRoute, private subjectsService: SubjectsService,private db:AngularFireDatabase) { }

  ngOnInit() {
    // this.subjectsService.getHttpSubjects().subscribe(data => {
    //   this.list = data
    //   this.route.paramMap.subscribe(para=>this.id=para.get('Id'))
    //   this.list.find(p=>{
    //     if(p.Id===this.id)
    //       this.subject=p
    //   })
    //   this.http.get(`../assets/Quizs/${this.id}.js`).subscribe(data=>{
    //     this.questions=data;
    //     for(let i=0;i<this.questions.length;i++){
    //       this.answers.push(this.questions[i].Answers)
    //     }
    //   })
    // })
    this.route.paramMap.subscribe(para => {
      this.id = para.get('Id')
    })
    this.subjectsService.allSubjects.subscribe(item =>{
      this.list = item
      this.list.filter(element => {
        if(element.Id===this.id)
        this.subject=element
      });
    })

    this.allQuizzesRef=this.db.list(`Quizzes`)
    this.allQuizzes = this.allQuizzesRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    this.allQuizzes.subscribe(a=>{this.questions=a
      console.log(this.questions);})
    
  }
  itemOnPage: number = 1;
  page: number = 1;

  // firstPage() {
  //   this.page = 1
  // }
  // lastPage() {
  //   this.page = this.list.length / this.itemOnPage
  // }
  nextPage() {
    if (this.list.length / this.itemOnPage > this.page)
      this.page++
  }
  prePage() {
    if (this.page > 1)
      this.page--
  }
  logOut() {
    localStorage.removeItem('login');
  }
}
