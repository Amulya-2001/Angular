import { Component } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week1Project';
  constructor(private router:Router){}
  loginPage(){
    this.router.navigate(['login']);
  }
  dashboardPage(){
    this.router.navigate(['dashboard']);
  }
}
