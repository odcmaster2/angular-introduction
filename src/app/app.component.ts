import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Davilas';

  person = {
    givenName: "Ioannis",
    surName: "Davilas",
    age: 0x25,
    email: 'idavilas@ipharma.gr'
  }
}
