import { Component, OnInit } from '@angular/core';
import { AddPostRequest } from 'src/app/Models/add-post.models';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, private toaster: NgToastService, private formBuilder: FormBuilder) { }
  postForm: any = FormGroup;
  submitted = false;
  dt: any;
  dataDisplay: any;

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required,],
      content: ['', Validators.required],
      summary: ['', Validators.required],
      imageUrl: ['', Validators.required],
      author: ['', [Validators.required]],
    });
  }

  get f() { return this.postForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.postForm.invalid) {
      return;
    }
    this.api.addPost(this.postForm.value).subscribe(
      (res) => {
        if (res) {
          this.toaster.success({
            summary: 'Success',
            detail: 'Post Added Successfully',
            duration: 2000,
          });
          this.router.navigate(['/dashboard/posts']);
        }
      },
      (err: any) => {
        this.toaster.error({
          summary: 'Error Message',
          detail: 'Post Not Added',
          duration: 3000,
        });
      });
  }

  allPostPage() {
    this.router.navigate(['/dashboard/posts'])
  }

}
