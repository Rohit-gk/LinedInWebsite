import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private token:TokenService,private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.token.removeToken();
    this.token.isLoggedIn.next(false);
    localStorage.clear();
    this.router.navigate(['/'])
  }


}
