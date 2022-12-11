import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent {
  person: Person = {
    name: '',
    lastname: '',
    age: 0,
    address: {
      city: '',
      street: '',
      postCode: 0,
    },
  };

  constructor(private localStore: PersonService) {}

  onClick(person: Person) {
    this.localStore.saveData(person);
  }
}
