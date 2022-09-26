import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/Models/view.profile.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  profiles: Profile[] = [];

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

  deleteProfile(userid: any) {
    if (confirm("Are you sure to delete " + userid)) {
      this.api.deleteProfile(userid).subscribe(response => {
        location.reload();
      })
    }
  }

  editProfile(id: any) {
    this.router.navigate([`/dashboard/updateprofile/${id}`])
  }

  addProfilePicture() {

  }
}
