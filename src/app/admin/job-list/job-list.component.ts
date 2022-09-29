import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/Models/job.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  filterTerm!: string;
  jobs: Job[] = [];
  p: number = 1;
  total: number = 0;

  ngOnInit() {
    this.getAllJobs();
  }

  getAllJobs() {
    this.api.AllJobs().subscribe(
      response => {
        this.jobs = response;
      }
    )
  }

  goToEditProfile() {
    this.router.navigate(['/dashboard/updateprofile'])
  }

  deleteJobs(jobid: any) {
    if (confirm("Are you sure to delete " + jobid)) {
      this.api.deleteJob(jobid).subscribe(response => {
        location.reload();
      })
    }
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getAllJobs();
  }

}
