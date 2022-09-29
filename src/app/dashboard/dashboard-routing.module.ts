import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../authentication.guard';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { DashboardComponent } from './dashboard.component';
import { JobsComponent } from './jobs/jobs.component';
import { MynetworkComponent } from './mynetwork/mynetwork.component';
import { PostComponent } from './post/post.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ReuestsComponent } from './reuests/reuests.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent, },
      { path: 'addprofile', component: AddProfileComponent , },
      { path: 'updateprofile/:id', component: UpdateProfileComponent, },
      { path: 'requests', component: ReuestsComponent ,},
      { path: 'jobs', component: JobsComponent,  },
      { path: 'posts', component: PostComponent , },
      { path: 'mynetwork', component: MynetworkComponent ,},
      { path: 'viewallposts', component: ViewAllPostsComponent },
      { path: 'allposts', component: AllPostsComponent , },
      { path: 'createpost', component: CreatePostComponent , },
      { path: 'profilelist', component: ProfileListComponent ,},
      { path: 'updatepost/:id', component: UpdatePostComponent,  },
      { path: 'chatbox', component: ChatBoxComponent ,},
      { path: 'commentbox', component: CommentBoxComponent ,},
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
