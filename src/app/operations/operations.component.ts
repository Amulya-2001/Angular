/*import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  values: any[] = [];
  newValue: string = '';
  editId: number | null = null;
  updatedValue: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchValues();
  }

  fetchValues() {
    this.dataService.getValues().subscribe((data: any[]) => {
      this.values = data;
    });
  }

  addValue() {
    if (this.newValue.trim() !== '') {
      this.dataService.addValue(this.newValue).subscribe((response: any) => {
        this.values.push(response);
        this.newValue = '';
      });
    }
  }
  

  editValue(id: number) {
    this.editId = id;
    const valueToEdit = this.values.find(value => value.id === id);
    this.updatedValue = valueToEdit ? valueToEdit.name : '';
  }

  updateValue(id: number) {
    const valueToUpdate = this.values.find(value => value.id === id);
    if (valueToUpdate && this.updatedValue.trim() !== '') {
      valueToUpdate.name = this.updatedValue;
      this.dataService.updateValue(id.toString(), valueToUpdate.name).subscribe(() => {
        this.editId = null;
      });
    }
  }
  
  deleteValue(id: number) {
    this.dataService.deleteValue(id.toString()).subscribe(() => {
      this.values = this.values.filter(value => value.id !== id);
    });
  }
  
}
*/
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  values: any[] = [];
  newValue: string = '';
  editId: number | null = null;
  updatedValue: string = '';

  displayedColumns: string[] = ['name', 'actions']; // Add this line


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchValues();
  }

  fetchValues() {
    this.dataService.getValues().subscribe((data: any[]) => {
      this.values = data;
    });
  }

  addValue() {
    if (this.newValue.trim() !== '') {
      this.dataService.addValue(this.newValue).subscribe((response: any) => {
        this.values.push(response); // Update the values array with the response
        this.newValue = ''; // Clear the newValue field
        this.fetchValues();
      });
    }
  }
  

  editValue(id: number) {
    this.editId = id;
    const valueToEdit = this.values.find(value => value.id === id);
    this.updatedValue = valueToEdit ? valueToEdit.name : '';
  }

  updateValue(id: number) {
    const valueToUpdate = this.values.find(value => value.id === id);
    if (valueToUpdate && this.updatedValue.trim() !== '') {
      valueToUpdate.name = this.updatedValue;
      this.dataService.updateValue(id.toString(), valueToUpdate.name).subscribe(() => {
        this.editId = null;
      });
    }
  }
  
  deleteValue(id: number) {
    this.dataService.deleteValue(id.toString()).subscribe(() => {
      this.values = this.values.filter(value => value.id !== id);
    });
  }
}
