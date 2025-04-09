import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { UserFormComponent } from './components/user-form/user-form.component';
// import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, /* UserFormComponent, UserListComponent */],
  imports: [BrowserModule, SharedModule, RouterModule, AppRoutingModule, HttpClientModule, MatProgressBarModule],
  bootstrap: [AppComponent,]
})

export class AppModule { }