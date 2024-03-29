import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../DAL/subjects.service';

@Component({
    selector: 'app-listsubjects',
    templateUrl: './listsubjects.component.html',
    styleUrls: ['./listsubjects.component.css']
})
export class ListsubjectsComponent implements OnInit {
    list;
    constructor(private subjectsService:SubjectsService) { }

    ngOnInit() {
        this.subjectsService.allSubjects.subscribe(item=>this.list=item)
    }
    p = 1;
    logOut(){
        localStorage.removeItem('login');
      }
}
