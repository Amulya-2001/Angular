import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/values';

  constructor(private http: HttpClient) { }

  getValues(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateValue(id: string, newName: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, { name: newName });
  }

  deleteValue(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  addValue(newName: string): Observable<any> {
    return this.http.post(this.apiUrl, { name: newName });
  }

  private validCredentials=[
    {Username:'userOne',Password:'pwOne'},
    {Username:'userTwo',Password:'pwTwo'},
    {Username:'userThree',Password:'pwThree'},
  ];

  authenticate(username:string,password:string):boolean{
    const validUser=this.validCredentials.find(
      (cred)=>cred.Username===username && cred.Password===password
    );
    return !!validUser;
}
}

  /*
  getValues(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl);
  }

  addValue(value: string): Observable<any> {
    this.values.push(value);
    return this.http.put(this.baseUrl, this.values);
  }

  updateValue(index: number, updatedValue: string): Observable<any> {
    // Update the value in the in-memory array
    this.values[index] = updatedValue;
  
    // Prepare the data for the update request
    const updatedData = this.values;
  
    // Make the PUT request to update the data on the server
    return this.http.put(this.baseUrl, updatedData);
  }
  

  deleteValue(index: number): Observable<any> {
    this.values.splice(index, 1);
    return this.http.put(this.baseUrl, this.values);
  }

 
  private values:string[]=['AMULYA','BINDU','SANJANA','HUSNA','GOWTHAMI'];

  private validCredentials=[
    {Username:'userOne',Password:'pwOne'},
    {Username:'userTwo',Password:'pwTwo'},
    {Username:'userThree',Password:'pwThree'},
  ];

  authenticate(username:string,password:string):boolean{
    const validUser=this.validCredentials.find(
      (cred)=>cred.Username===username && cred.Password===password
    );
    return !!validUser;
  }*/


