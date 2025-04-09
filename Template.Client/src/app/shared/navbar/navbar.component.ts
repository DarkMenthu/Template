import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDENTIFIABLE } from '../../shared/nav-footer.config';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  appName = IDENTIFIABLE.appName;
  isExpanded = false;
  user = '';
  isLoading = false; // modify this to true after implementing user service

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //this.getCurrentUser();
  }

  // getCurrentUser(): void {
  //   this.http.get<any>(`${environment.apiBaseUrl}/currentuser`)
  //     .subscribe({
  //       next: (data) => {
  //         this.user = data.name;
  //         this.isLoading = false; 
  //       },
  //       error: () => {
  //         console.log('Error');
  //         this.isLoading = false;
  //       }
  //     });
  // }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
