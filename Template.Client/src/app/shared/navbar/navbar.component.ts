import { Component, OnInit } from '@angular/core';
import { IDENTIFIABLE } from '../../shared/nav-footer.config';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  appName = IDENTIFIABLE.appName;

  constructor() {}

  ngOnInit(): void {}

}
