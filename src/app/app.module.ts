import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router} from '@angular/router';
import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    GitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: '', component: GitComponent}]),
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
