import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { TokenService } from 'src/app/services/token.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any = FormGroup;
  loading = false;
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private token: TokenService,
    private toaster:NgToastService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  goToDashboard() {

    this.api.login(this.loginForm.value).subscribe({
      next: (res) => {
       if(res){

       }
        localStorage.setItem("token:", res.token);
        localStorage.setItem("role:", res.role); 

        let role = this.token.getRole();
        role === 'Admin'
          ? this.router.navigate(['admin/admindashboard'])
          : this.router.navigate(['/dashboard/posts']);
        this.token.isLoggedIn.next(true);

        this.toaster.success({
          summary: 'Login Message',
          detail: 'Login Success',
          duration: 2000,
        
        });
      }
    })
    console.log(this.token);
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  }
  
}