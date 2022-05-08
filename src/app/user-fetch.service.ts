import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserFetchService {

  name: any;
  login: any; 
  avatar: any;
  link: any;
  bio: any;
  followers: any;
  following: any;
  date: any;
  //Repos
  repos: any;
  constructor(private http: HttpClient) { }
  userFetch(username: string){
    let userUrl = `https://api.github.com/users/${username}`;
    let promise = new Promise((resolve: any, reject:any)=>{
      this.http.get<User>(userUrl)
      .toPromise()
      .then(
        response => {
          this.name = response?.name;
          this.login = response?.login;
          this.avatar = response?.avatar_url;
          this.link = response?.html_url;
          this.bio = response?.bio;
          this.followers = response?.followers;
          this.following = response?.following;
          this.date = response?.created_at;
          resolve(
            this.name,
            this.login,
            this.avatar,
            this.link,
            this.bio,
            this.followers,
            this.following,
            this.date
          );
        },
        (error) => {
          'User Not Found'
          reject(error);
        }
      );
    });
    return promise;
  }
  repoFetch(username: string){
    let repoUrl = `https://api.github.com/users/${username}/repos?per_page=15&sort='created: asc'`;
    let promise2 = new Promise((resolve, reject)=>{
      this.http.get<Repo>(repoUrl)
      .toPromise()
      .then(
        response => {
          this.repos = response;
          resolve(
            this.repos = response
          );
        },
        error =>{
          'Repos Not Found'
          reject(error);
        }
      );
    });
    return promise2;

  }
}
