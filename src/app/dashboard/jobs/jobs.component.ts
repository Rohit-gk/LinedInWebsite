import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/Models/job.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private api:ApiService) { }
  
  filterTerm!: string;
  jobs: Job[] = [];
  p: number = 1;
  total: number = 0;

  ngOnInit(){
    this.AllJobsList();
  }

  AllJobsList(){
    this.api.AllJobs().subscribe(
      response => {
        this.jobs = response;
      }
    )
  }

  
  pageChangeEvent(event: number) {
    this.p = event;
    this.AllJobsList();
  }

}
