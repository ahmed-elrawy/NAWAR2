import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    console.log(    this.auth.isLoggedIn())
    console.log(    this.auth.isAdmin())
    
  }

}
