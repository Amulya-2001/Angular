import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http' ;
import { DataService } from './data.service';
import { MatIconModule} from '@angular/material/icon';
import { MatIconRegistry} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { OperationsComponent } from './operations/operations.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    OperationsComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [DataService,MatIconRegistry],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  
 }
