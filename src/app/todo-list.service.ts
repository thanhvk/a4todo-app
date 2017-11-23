import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {Todo} from './todo';

@Injectable()
export class TodoListService {
  lastId : number = 0;
  todos : Todo[] = [];

  constructor(private _store : Store < any >) {
    _store
      .select('todos')
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  getAllTodos() : Todo[] {
    return this.todos;
  }

  // addTodo(todo: Todo) {
  //   todo.id = ++this.lastId;   this.todos.push(todo); }

  public addTodo(todo : Todo) : void {
    this
      ._store
      .dispatch({
        type: 'ADD_TODO',
        payload: {
          id: ++this.lastId,
          name: todo.name,
          complete: todo.complete
        }
      });
  }

  // delTodo(id : number) {
  //   this.todos = this
  //     .todos
  //     .filter(todo => todo.id !== id);
  // }

  public delTodo(todoId: number): void {
    this._store.dispatch({
      type: 'REMOVE_TODO',
      payload: { id: todoId }
    });
  }

  // toggleTodoComplete(id : number) {
  //   this
  //     .todos
  //     .map(todo => {
  //       if (todo.id === id) {
  //         todo.complete = !todo.complete;
  //       }
  //     });
  // }

  public toggleTodoComplete(todoId: number): void {
    this._store.dispatch({
      type: 'TOGGLE_COMPLETE',
      payload: { id: todoId }
    });
  }
}
