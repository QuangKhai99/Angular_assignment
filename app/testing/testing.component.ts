import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../DAL/subjects.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  list:any;
  id;
  questions;
  answers=[];
  subject;
  constructor(private route: ActivatedRoute, private subjectsService: SubjectsService,private http:HttpClient) { }

  ngOnInit() {
    this.subjectsService.getHttpSubjects().subscribe(data => {
      this.list = data
      this.route.paramMap.subscribe(para=>this.id=para.get('Id'))
      this.list.find(p=>{
        if(p.Id===this.id)
          this.subject=p
      })
      this.http.get(`../assets/Quizs/${this.id}.js`).subscribe(data=>{
        this.questions=data;
        for(let i=0;i<this.questions.length;i++){
          this.answers.push(this.questions[i].Answers)
        }
      })
    })
  }
  itemOnPage: number = 1;
  page:number = 1;
  firstPage(){
    this.page=1
  }
  lastPage(){
    this.page=this.list.length/this.itemOnPage
  }
  nextPage(){
    if(this.list.length/this.itemOnPage>this.page)
    this.page++
  }
  prePage(){
    if(this.page>1)
      this.page--
  }
  logOut(){
    localStorage.removeItem('login');
  }
}
