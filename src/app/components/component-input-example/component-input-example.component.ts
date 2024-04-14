import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from "../person-table/person-table.component";

@Component({
    selector: 'app-component-input-example',
    standalone: true,
    templateUrl: './component-input-example.component.html',
    styleUrl: './component-input-example.component.css',
    imports: [PersonTableComponent]
})
export class ComponentInputExampleComponent {

  person0 : Person =
  {
    givenName: "Ioannis",
    surName: "Davilas",
    age: 0x25,
    email: 'idavilas@ipharma.gr',
    address: 'Rizountos27'
  };
  person1 : Person =

  {
    givenName: "Konstantinos",
    surName: "Davilas",
    age: 0x25,
    email: 'kdavilas@ipharma.gr',
    address: 'Rizountos27'
  }
  
}
