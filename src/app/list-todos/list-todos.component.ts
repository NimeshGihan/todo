import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn to code', false, new Date()),
    new Todo(2, 'Become expert in Java', false, new Date()),
    new Todo(3, 'visit USA', false, new Date())
    // {id : 1, description : 'Learn to Code'},
    // {id : 2, description : 'Become expert in Java'},
    // {id : 3, description : 'Visit USA'}
  ]

  // todo = {
  //   id : 1,
  //   description : 'Learn to Code'
  // }

  constructor() { }

  ngOnInit() {
  }

}
