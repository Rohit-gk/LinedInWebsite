import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  constructor(private api: ApiService, private formBuilder: FormBuilder, private router: Router, private toaster: NgToastService) { }

  jobForm: any = FormGroup;
  submitted = false;

  ngOnInit() {
    this.jobForm = this.formBuilder.group({

      organization: ['', Validators.required],
      date: ['', [Validators.required]],
      postion: ['', Validators.required],
      organizationLogo: ['', [Validators.required]],
    });
  }

  get f() { return this.jobForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.jobForm.invalid) {
      return;
    }
    this.api.addJob(this.jobForm.value).subscribe(
      data => {
        this.router.navigate(['admin/joblist']);
        this.toaster.success({
          summary: 'Success',
          detail: 'Job Created Successfully',
          duration: 4000,

        });
      }
    )
  }

  reset() {
    this.jobForm.reset();
  }

}
