import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoListService {
  lastId: number = 0;
  todos: Todo[] = [];

  constructor() {
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    todo.id = ++this.lastId;
    this.todos.push(todo);
  }

  delTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodoComplete(id:number) {
    this.todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
    });
  }
}
