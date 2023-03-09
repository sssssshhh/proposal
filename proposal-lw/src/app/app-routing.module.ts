import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { MainComponent } from './navigation/main/main.component';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'login', component: LoginComponent},
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
