import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/Models/job.model';
import { ApiService } from 'src/app/services/api.service';
import { NgToastService } from 'ng-angular-popup';
import { JobApplys } from 'src/app/Models/job-apply.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private api: ApiService, private toaster: NgToastService) { }
  filterTerm!: string;
  jobs: Job[] = [];
  job = {};
  p: number = 1;
  total: number = 0;

  ngOnInit() {
    this.AllJobsList();
  }

  AllJobsList() {
    this.api.AllJobs().subscribe(
      response => {
        this.jobs = response;
      }
    )
  }

  ApplyJob(jobId: any) {
    this.api.JobApply(jobId).subscribe(
      res =>{
        console.log(res);
        this.job = res;
        // this.toaster.success({
        //   summary: 'Success',
        //   detail: 'Job Applied Successfully',
        //   duration: 3000,
        // });
      })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.AllJobsList();
  }

}
