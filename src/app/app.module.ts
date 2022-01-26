import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionComponent } from './components/submission/submission.component';

const appRoutes: Routes = [
 {path: '', component: FormComponent},
 {path: 'submission', component: SubmissionComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SubmissionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
