import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/Models/view.profile.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users-profiles',
  templateUrl: './users-profiles.component.html',
  styleUrls: ['./users-profiles.component.css']
})
export class UsersProfilesComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  filterTerm!: string;
  profiles: Profile[] = [];
  p: number = 1;
  total: number = 0;

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles() {
    this.api.AllProfiles().subscribe(
      response => {
        this.profiles = response;
      }
    )
  }

  goToEditProfile() {
    this.router.navigate(['/dashboard/updateprofile'])
  }

  deleteProfile(userid: any) {
    if (confirm("Are you sure to delete " + userid)) {
      this.api.deleteProfile(userid).subscribe(response => {
        location.reload();
      })
    }
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getProfiles();
  }

}
