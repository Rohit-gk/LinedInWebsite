import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersPostComponent } from './users-post/users-post.component';
import { UsersProfilesComponent } from './users-profiles/users-profiles.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddJobComponent } from './add-job/add-job.component';
import { JobListComponent } from './job-list/job-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersPostComponent,
    UsersProfilesComponent,
    AdminDashboardComponent,
    AddJobComponent,
    JobListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
