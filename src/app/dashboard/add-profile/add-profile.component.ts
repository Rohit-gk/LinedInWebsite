import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddProfileRequest } from 'src/app/Models/profile.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) { }
  profileForm: any = FormGroup;
  submitted = false;

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      location: ['', Validators.required],
      mobile: ['', Validators.required],
      birthDate: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      organization: ['', [Validators.required]],
    });
  }

  get f() { return this.profileForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }
    this.api.addProfile(this.profileForm.value).subscribe(
      data => {
        this.router.navigate(['dashboard/profile'])
      }
    )
  }

  goProfilePage() {
    this.router.navigate(['dashboard/posts'])
  }
}

