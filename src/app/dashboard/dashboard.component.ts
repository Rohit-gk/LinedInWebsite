import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../Models/view.profile.models';
import { ApiService } from '../services/api.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private token:TokenService,private api:ApiService) { }


  ngOnInit(){
  }

  goToViewProfilePage(){
    this.router.navigate(['dashboard/profile'])
  }

  logout(){
    this.token.removeToken();
    this.token.isLoggedIn.next(false);
    localStorage.clear();
    this.router.navigate(['/'])
  }

  

}
