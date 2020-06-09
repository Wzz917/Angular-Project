import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from './http.service';
import { Thing } from './modal/thing';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, OnDestroy {

  form:NgForm;
  inputId:string;
  inputName:string;
  inputDescription:string;
  things:Thing[];
  subscription:Subscription;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.things = this.httpService.returnThings();
    this.httpService.getThings().subscribe(response => {
      this.httpService.setThings(response);
    })
    this.subscription = this.httpService.thingsChanged.subscribe((things) => {
      this.things = things;
    });
  }

  onSubmit(form:NgForm) {
    console.log(form);
    this.httpService.postThings(new Thing(+form.value['id'],form.value['name'],form.value['description']))
    .subscribe(response => {
      console.log(response);
    })
    this.inputId = "";
    this.inputName = "";
    this.inputDescription = "";
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
