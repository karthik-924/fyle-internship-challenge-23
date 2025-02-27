import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(
    private httpClient: HttpClient
  ) { }

  // headers = new HttpHeaders({
  //   'Authorization': `token ${this.personalAccessToken}`
  // });

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  getRepos(githubUsername: string, page: number, pageSize: number) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=${pageSize}&sort=created&direction=asc`);
  }
}
