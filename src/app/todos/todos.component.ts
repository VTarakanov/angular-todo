import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../app.component";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

  @Input() todos: Todo[] = []


  editable: boolean = false;

  constructor() { }

  ngOnInit(): void {


  }

  addItem(title: string): void {
    if (title != "") {
    this.todos.push({
      id: this.todos.length+1,
      completed: false,
      title: title,
    });
    } else alert('Поле ввода не должно быть пустым')

  }

  removeItem(id: number): void {
    this.todos = this.todos.filter(todoVal=> todoVal.id !== id)
  }

  editItem(todoItem: any) {
   const result = prompt ('сообщение, значение по умолчанию', todoItem.title);
    todoItem.title = result
  }
}
