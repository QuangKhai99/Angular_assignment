import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  allSubjectsRef: AngularFireList<any>;
  allSubjects: Observable<any[]>;
  allQuizzesRef: AngularFireList<any>;
  allQuizzes:Observable<any[]>;
  idQuizz;
  constructor(private db: AngularFireDatabase) { 
    this.allSubjectsRef = db.list('Subjects');
    this.allSubjects = this.allSubjectsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    
  }
  // getQuizzes(id){
  //   this.allQuizzesRef=this.db.list(`Quizzes/${id}`)
  //   this.allQuizzes = this.allQuizzesRef.snapshotChanges().pipe(
  //     map(changes => 
  //       changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
  //     )
  //   );
  //   console.log(this.allQuizzes);  
  // }
}

