import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

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
