import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Post {
  id: number;
  title: string;
  location: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }


  public addPost(post): Promise<Post> {
    return this.http
      .post<Post>(`${this.apiUrl}`, post, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept-Type': 'application/json',
        }),
      })
      .toPromise();
  }
}
