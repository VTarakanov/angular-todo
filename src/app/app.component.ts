import {Component} from '@angular/core';

export interface Todo {
  id: number
  title: string
  completed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'Список задач';

  public todos: Todo[] = [
    {id: 1, title: 'Задача 1', completed: false},
    {id: 2, title: 'Задача 2', completed: false}
  ]
}
