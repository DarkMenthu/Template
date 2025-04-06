import { Component, OnInit } from '@angular/core';
import { IDENTIFIABLE } from '../../shared/nav-footer.config';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  currentYear = IDENTIFIABLE.currentYear;
  companyName = IDENTIFIABLE.companyName;
  developerName = IDENTIFIABLE.developerName;

  constructor() {}

  ngOnInit(): void {}

}
