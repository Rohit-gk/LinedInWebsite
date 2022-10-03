import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Models/post.models';
import { Profile } from 'src/app/Models/view.profile.models';
import { ApiService } from 'src/app/services/api.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router: Router, private api: ApiService,private toaster:NgToastService) { }

  post: Post[] = [];
  profiles: Profile[] = [];
  userProfiles: any = {};


  posts: Post | undefined;

  ngOnInit() {
    this.getProfiles();
    this.getAllPosts();
    this.SingleUserProfileData();
  }

  getAllPosts() {
    this.api.AllPosts().subscribe(
      response => {
        this.post = response;
        this.posts = this.post[0];
      }
    )
  }

  getProfiles() {
    this.api.AllProfiles().subscribe(
      response => {
        this.profiles = response;
      }
    )
  }

  goToEditPost(id: any) {
    this.router.navigate([`/dashboard/updatepost/${id}`])
  }

  goToJobPage() {
    this.router.navigate(['dashboard/jobs'])
  }

  addPost() {
    // this.toaster.success({detail:'Success',summary:'This is Success', sticky:true,position:'tr'})
    this.router.navigate(['dashboard/createpost'])
  }

  deletePost(id: any) {
     {
      this.api.deletePost(id).subscribe(response => {
        this.toaster.success({
          summary: 'Success',
          detail: 'Post Deleted Successfully',
          duration: 3000,

        });
        location.reload();
      })
    }
  }

  goToCommentSection(){
    this.router.navigate(['/dashboard/commentbox'])
  }

  SingleUserProfileData() {
    this.api.UsersLoginProfileData().subscribe(
      response => {
        this.userProfiles = response;
        console.log(this.userProfiles)

      })
  }
}
