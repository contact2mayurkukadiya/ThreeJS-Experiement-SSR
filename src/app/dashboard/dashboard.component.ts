import { Component } from '@angular/core';
import { MenuItem } from '../Models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  menuItems: MenuItem[] = [
    { title: 'Mouse Tracking', routerLink: 'three-1' },
    { title: 'Mouse Interation', routerLink: 'three-2' },
  ];
}
