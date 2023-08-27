import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

  export class DashboardComponent implements OnInit {
    username: string = '';
    displayedColumns: string[] = ['position', 'value', 'actions'];
  

  
  values: string[] = [];
  newValue: string = '';
  editIndex: number = -1;

  constructor(private dataService: DataService,private router:Router) {}

  
  ngOnInit() {
    this.fetchValues();
    this.username = localStorage.getItem('username') || '';
  }

  fetchValues() {
    this.dataService.getValues().subscribe({
      next: (values) => {
        this.values = values;
      },
      error: (error) => {
        console.error('Error fetching values:', error);
      }
    });
  }


  logout() {
    // Clear any stored user data and navigate to the login page
    localStorage.removeItem('username');
    alert(`${this.username} has logged out`);
    this.router.navigate(['/login']);
  }
}

//values=['Amulya','Bindu','Sanjana','Husna','Gowthami']
