import { Component } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoListService]
})
export class AppComponent {
  newTodo: Todo;
  title = 'app';

  constructor(private todoListService: TodoListService) {
    this.newTodo = {
      id: -1,
      name: '',
      complete: false
    };
  }

  get todos() {
    return this.todoListService.getAllTodos();
  }

  addTodo() {
    this.todoListService.addTodo(this.newTodo);
    this.newTodo = {
      id: -1,
      name: '',
      complete: false
    }
  }

  toggleTodoComplete(todo: Todo) {
    this.todoListService.toggleTodoComplete(todo.id);
  }

  delTodo(todo: Todo) {
    this.todoListService.delTodo(todo.id);
  }
}
