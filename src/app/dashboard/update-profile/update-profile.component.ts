import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router:Router,private api:ApiService,private activatedRoute : ActivatedRoute,private toaster:NgToastService) { }

  ngForm: any = FormGroup;
  submitted = false;
  profileList : any = [];
  url_id!: any;


  ngOnInit(){
    this.ngForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      organization: ['', [Validators.required]],
      profileImage: ['', [Validators.required]],
      
    });

    this.api.UsersLoginProfileData().subscribe((getProfiles) =>{debugger
      this.profileList = getProfiles;

      for (let i=0; i< this.profileList.length; i++){

        if (this.url_id == this.profileList[i].id) {
          this.ngForm.controls['id'].patchValue(
            this.profileList[i].id);

          this.ngForm.controls['name'].patchValue(
            this.profileList[i].name
          );
          this.ngForm.controls['email'].patchValue(
            this.profileList[i].email
          );
          this.ngForm.controls['address'].patchValue(
            this.profileList[i].address
          );
          this.ngForm.controls['organization'].patchValue(
            this.profileList[i].organization
          );
          this.ngForm.controls['profileImage'].patchValue(
            this.profileList[i].profileImage
          );
        }
      }
    });

    this.url_id = this.activatedRoute.snapshot.paramMap.get('id');
  }
  
  get f() { return this.ngForm.controls; }

  goProfilePage(){
    this.router.navigate(['dashboard/profile'])
  }


  onSubmit() {
    this.api.updateUserProfile(this.ngForm.value).subscribe(() => {
        this.router.navigate(['/dashboard/profile'])
        this.toaster.success({
          summary: 'Success',
          detail: 'Profile Updated Successfully',
          duration: 3000,

        });   
      },
      (err) => {
        this.toaster.error({
          summary: 'Failed',
          detail: 'Profile Updated Failed',
          duration: 3000,

        });   
      }
    );
  }
}

