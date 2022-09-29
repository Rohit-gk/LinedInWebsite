import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../authentication.guard';
import { AddJobComponent } from './add-job/add-job.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { JobListComponent } from './job-list/job-list.component';
import { UsersPostComponent } from './users-post/users-post.component';
import { UsersProfilesComponent } from './users-profiles/users-profiles.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,

    children: [
      { path: 'userspost', component: UsersPostComponent},
      { path: 'usersprofile', component: UsersProfilesComponent},
      { path: 'admindashboard', component: AdminDashboardComponent},
      { path: 'addjob', component: AddJobComponent},
      { path: 'joblist', component: JobListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
