import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/models/task';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  name:string;
  id:number = 3;
  tasks:Task[] = [new Task(1,"play basketball", 2), new Task(2, "cook", 3)];
  constructor() { }

  ngOnInit() {
    console.log(this.name);
  }


  onInput(input:string) {
    this.name = input;
    console.log(this.name);
  }

  onClick() {
    this.tasks.push(new Task(this.id, this.name, 1));
    this.id +=1;
    this.name="";
  }

  onRemove(num:number) {
    for (let i=0;i<this.tasks.length;i++) {
      if (this.tasks[i].id === num) {
        this.tasks.splice(i, 1);
      }
    }
  }
}
