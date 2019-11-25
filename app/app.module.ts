import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { IntroComponent } from './intro/intro.component';
import { ContactComponent } from './contact/contact.component';
import { QuestionComponent } from './question/question.component';
import { AccountComponent } from './account/account.component';
import { FixpasswordComponent } from './fixpassword/fixpassword.component';
import { FixPassWordComponent } from './fix-pass-word/fix-pass-word.component';
import { TestingComponent } from './testing/testing.component';
import { ListsubjectsComponent } from './listsubjects/listsubjects.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IntroComponent,
    ContactComponent,
    QuestionComponent,
    AccountComponent,
    FixpasswordComponent,
    FixPassWordComponent,
    TestingComponent,
    ListsubjectsComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    RouterModule.forRoot([
      { path: '' , component:IndexComponent},
      { path: 'index' , component:IndexComponent},
      { path: 'intro' , component:IntroComponent},
      { path: 'contact-us' , component:ContactComponent},
      { path: 'q-&-a' , component:QuestionComponent},
      { path: 'account' , component:AccountComponent},
      { path: 'fixinfo' , component:FixpasswordComponent},
      { path: 'fixpassword', component:FixPassWordComponent},
      { path: 'listsubject', component:ListsubjectsComponent},
      { path: 'testing/:Id', component:TestingComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
