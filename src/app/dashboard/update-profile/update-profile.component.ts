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
      userId: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      location: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      organization: ['', [Validators.required]],
    });

    this.api.AllProfiles().subscribe((getProfiledata) =>{
      this.profileList = getProfiledata;

      for (let i=0; i< this.profileList.length; i++){

        if (this.url_id == this.profileList[i].userid) {
          this.ngForm.controls['userId'].patchValue(this.profileList[i].userId);

          this.ngForm.controls['firstName'].patchValue(
            this.profileList[i].firstName
          );
          
          this.ngForm.controls['lastName'].patchValue(
            this.profileList[i].lastName
          );
          this.ngForm.controls['location'].patchValue(
            this.profileList[i].location
          );
          this.ngForm.controls['mobile'].patchValue(
            this.profileList[i].mobile
          );
          this.ngForm.controls['birthDate'].patchValue(
            this.profileList[i].birthDate
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
          this.ngForm.controls['uploadCV'].patchValue(
            this.profileList[i].uploadCV
          );
        }
      }
    });

    this.url_id = this.activatedRoute.snapshot.paramMap.get('userid');
  }
  
  get f() { return this.ngForm.controls; }

  goProfilePage(){
    this.router.navigate(['dashboard/profile'])
  }


  onSubmit() {
    this.api.updateProfile(this.ngForm.value).subscribe(() => {
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

