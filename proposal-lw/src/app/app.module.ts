import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './application/test1/test1.component';
import { Test2Component } from './application/test2/test2.component';
import { Test3Component } from './application/test3/test3.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { MainComponent } from './navigation/main/main.component';
import { LoginComponent } from './login/login.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UseStore } from 'src/store/user.store';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [
    UseStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
