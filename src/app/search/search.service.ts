import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from './model/album';
import { Result } from './model/result';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  getAlbums(input:string) {
    return this.http.get<Result>(`https://itunes.apple.com/search?term=${input}`);
  }

}
