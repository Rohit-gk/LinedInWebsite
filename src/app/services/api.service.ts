import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { Post } from '../Models/post.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  hide() {
    throw new Error('Method not implemented.');
  }
  show() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient, private route: Router, private tokenService: TokenService) { }

  login(param: string):Observable<any> {
    return this.http.post(
      `${environment.baseApiUrl}/Authenticate/login`, param)
  }

  register(param: string) {
    return this.http.post<any>(
      `${environment.baseApiUrl}/Authenticate/register`,param)
  };

  AllPosts() {
    return this.http.get<any>(
      `${environment.baseApiUrl}/Post`
    );
  }

  addPost(data: any) {
    return this.http.post(`${environment.baseApiUrl}/Post`, data);
  }

  updatePost(data:any){
    return this.http.put(`${environment.baseApiUrl}/Post`, data);
  }

  deletePost(id: any): Observable<any> {
    return this.http.delete(`${environment.baseApiUrl}/Post/${id}`,)
  }

  AllProfiles() {
    return this.http.get<any>(
      `${environment.baseApiUrl}/Profile`,
    );
  }

  addProfile(data: any) {
    return this.http.post(`${environment.baseApiUrl}/Profile`, data);
  }
  
  updateProfile(data: any): Observable<any> {
    return this.http.put(`${environment.baseApiUrl}/Profile`, data);
  }

  deleteProfile(userid: any): Observable<any> {
    var options = new HttpParams();
    return this.http.delete(`${environment.baseApiUrl}/Profile/${userid}`,);
  }

  AllNonFriendConnection(){
    const headers = {Authorization : `Bearer ${this.tokenService.getToken()}`}
    return this.http.get<any>(
      `${environment.baseApiUrl}/FriendRequest/AllNonFriendConnection`,{headers}
    );
  }

  SendFriendRequest(requestId:string){
    const headers = {Authorization : `Bearer ${this.tokenService.getToken()}`}
    return this.http.get(`${environment.baseApiUrl}/FriendRequest/${requestId}`,{headers});
  }

  MyAllInvitaions(){
    const headers = {Authorization : `Bearer ${this.tokenService.getToken()}`}
    return this.http.get<any>(
      `${environment.baseApiUrl}/FriendRequest/GetFriendRequest`,{headers}
    );
  }

  AcceptRejectRequest(requestId: any,status:string): Observable<any> {
    const headers = {Authorization : `Bearer ${this.tokenService.getToken()}`}
    return this.http.put(`${environment.baseApiUrl}/FriendRequest?RequestId=${requestId}&status=${status}`, {headers});
  }

  AllJobs() {
    return this.http.get<any>(
      `${environment.baseApiUrl}/Job`,
    );
  }

  addJob(data: any) {
    const headers = {Authorization : `Bearer ${this.tokenService.getToken()}`}
    return this.http.post(`${environment.baseApiUrl}/Job`, data,{headers});
  }

  deleteJob(jobid: any):Observable<any> {
    return this.http.delete(`${environment.baseApiUrl}/Job/${jobid}`,)
  }

  // deletePost(id: any): Observable<any> {
  //   return this.http.delete(`${environment.baseApiUrl}/Post/${id}`,)
  // }

}
