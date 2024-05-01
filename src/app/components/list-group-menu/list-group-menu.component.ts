import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'src/app/shared/interfaces/menu-item';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {
  menu: MenuItem[] = [
    {text: 'Component Input Example', routerLink: 'component-input-example'},
    {text: '@for-directive-example', routerLink: 'for-directive-example'},
    {text: 'Event-bind-example', routerLink: 'event-bind-example'},
    {text: 'Simple-datatable-example', routerLink: 'simple-datatable-example'},
    {text: 'Component-output-example', routerLink: 'component-output-example'},
    {text: 'Template-driven-form-example', routerLink: 'template-driven-form-example'},
    {text: 'Reactive-form-example', routerLink: 'reactive-form-example'},
    {text: 'Http-client-example', routerLink: 'http-client-example'},
    {text: 'User-registration-example', routerLink: 'user-registration-example'},
    {text: 'Restricted-content-example', routerLink: 'restricted-content-example'},
    {text: 'Fun-for-nerds', routerLink: 'fun-for-nerds'},
    { text: 'CRUD Example', routerLink: 'crud-example' }
  ]
}
