import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ReuestsComponent } from './reuests/reuests.component';
import { JobsComponent } from './jobs/jobs.component';
import { MynetworkComponent } from './mynetwork/mynetwork.component';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdatePostComponent } from './update-post/update-post.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    AddProfileComponent,
    UpdateProfileComponent,
    ReuestsComponent,
    JobsComponent,
    MynetworkComponent,
    PostComponent,
    ViewAllPostsComponent,
    AllPostsComponent,
    CreatePostComponent,
    ProfileListComponent,
    UpdatePostComponent,
    ChatBoxComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class DashboardModule { }
