import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Thing } from './modal/thing';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// import { map, tap } from 'rxjs/operators';

@Injectable()
export class HttpService {

  things:Thing[] = [];
  thingsChanged = new Subject<Thing[]>();

  constructor(private http:HttpClient) { }


  returnThings() {
    return this.things.slice();
  }

  addThings(thing:Thing) {
    this.things.push(thing);
    this.thingsChanged.next(this.things.slice());
  }

  setThings(things:Thing[]) {
    this.things = things;
    // console.log(this.things);
    this.thingsChanged.next(this.things.slice());
  }

  postThings(thing:Thing) {
    return this.http.post('https://practice-db-72213.firebaseio.com/things.json', thing);
  }

  getThings() {
    this.http.get<Thing[]>('https://practice-db-72213.firebaseio.com/things.json')
    .pipe(map(response => {
      const thingsArray = [];
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          thingsArray.push({...response[key]});
        }
      }
      return thingsArray;
    })).subscribe(response => {
      this.things = response;
      this.thingsChanged.next(this.things.slice());
    });
  }

  
}
