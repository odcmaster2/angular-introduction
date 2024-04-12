import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: "Ioannis",
    surName: "Davilas",
    age: 0x25,
    email: 'idavilas@ipharma.gr'
  }
}
