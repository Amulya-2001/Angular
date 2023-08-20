import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

 

  constructor() { }

 
  private values:string[]=['AMULYA','BINDU','SANJANA','HUSNA','GOWTHAMI'];

  private validCredentials=[
    {Username:'userOne',Password:'pwOne'},
    {Username:'userTwo',Password:'pwTwo'},
    {Username:'userThree',Password:'pwThree'},
  ];
  getValues():string[]{
    return this.values;
  }
  addValue(value:string):void{
    this.values.push(value);
  }

  authenticate(username:string,password:string):boolean{
    const validUser=this.validCredentials.find(
      (cred)=>cred.Username===username && cred.Password===password
    );
    return !!validUser;
  }

}
