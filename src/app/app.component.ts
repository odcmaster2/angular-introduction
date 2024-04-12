import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Davilas';

  person0 = 
  {
    givenName: "Ioannis",
    surName: "Davilas",
    age: 0x25,
    email: 'idavilas@ipharma.gr',
    address: 'Rizountos27'
  };
  person1 =

  {
    givenName: "Konstantinos",
    surName: "Davilas",
    age: 0x25,
    email: 'kdavilas@ipharma.gr',
    address: 'Rizountos27'
  }
}
