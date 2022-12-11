import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  // person: Person = {
  //   address: {},
  // };

  constructor() {}

  public getData(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  public saveData(person: Person) {
    localStorage.setItem('people', JSON.stringify(person));
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }
}
