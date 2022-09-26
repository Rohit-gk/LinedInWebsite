import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddPostRequest } from 'src/app/Models/add-post.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router:Router,private api:ApiService,private activatedRoute : ActivatedRoute) { }

  ngForm: any = FormGroup;
  submitted = false;
  postList : any = [];
  url_id!: any;


  ngOnInit(){
    this.ngForm = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      summary: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      author: ['', [Validators.required]],
    });
    

    this.api.AllPosts().subscribe((getPostdata) =>{
      this.postList = getPostdata;

      for (let i=0; i< this.postList.length; i++){

        if (this.url_id == this.postList[i].id) {
          this.ngForm.controls['id'].patchValue(this.postList[i].id);

          this.ngForm.controls['title'].patchValue(
            this.postList[i].title
          );
          
          this.ngForm.controls['content'].patchValue(
            this.postList[i].content
          );
          this.ngForm.controls['summary'].patchValue(
            this.postList[i].summary
          );
          this.ngForm.controls['imageUrl'].patchValue(
            this.postList[i].imageUrl
          );
          this.ngForm.controls['author'].patchValue(
            this.postList[i].author
          );
        }
      }
    });

    this.url_id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onSubmit() {
    
    this.api.updatePost(this.ngForm.value).subscribe(() => {
        this.router.navigate(['/dashboard/allposts'])   
      },
      (err) => {
       
      }
    );
  }

  allPostPage(){
    this.router.navigate(['/dashboard/allposts'])
  }

}
