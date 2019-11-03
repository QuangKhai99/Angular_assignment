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
  list;
  id;
  questions;
  subject;
  constructor(private route: ActivatedRoute, private subjectsService: SubjectsService,private http:HttpClient) { }

  ngOnInit() {
    this.subjectsService.getHttpSubjects().subscribe(data => {
      this.list = data
      this.route.paramMap.subscribe(para=>this.id=para.get('Id'))
      this.subject=this.list.find(p=>p.Id=this.id)
      this.http.get(`../assets/Quizs/${this.id}.js`).subscribe(data=>{this.questions=data;})
    })  
  }
  
}
