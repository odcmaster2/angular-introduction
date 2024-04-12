import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person: Person = {
    givenName: "Ioannis",
    surName: "Davilas",
    age: 0x25,
    email: 'idavilas@ipharma.gr',
    address: 'Rizountos27'
  }
}
