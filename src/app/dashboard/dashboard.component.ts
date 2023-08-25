import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayedColumns:string[]=['position','value'];
values:string[]=[];
newValue:string='';
constructor(private router:Router,private dataService:DataService){}
  ngOnInit(){
    this.values=this.dataService.getValues();
  }
 

addValue(newValue:String){
if(this.newValue.trim()!==''){
  this.dataService.addValue(this.newValue);
  this.newValue='';
 this.values=this.dataService.getValues();
 

}
}
}
//values=['Amulya','Bindu','Sanjana','Husna','Gowthami']
