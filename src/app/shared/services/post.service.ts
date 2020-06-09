import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  path = `${environment.api_url}`;
  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<Post[]> {
    return this.http.get(`${environment.api_url}/posts`)
    .pipe(map(response => response as Post[]), catchError(error => throwError(new Error(error)))
    );
  }

  getPosts2(id:number): Observable<Post[]> {
    return this.http.get(`${environment.api_url}/posts/${id}/comments`)
    .pipe(map(response => response as Post[]), catchError(error => throwError(new Error(error)))
    );
  }
}
