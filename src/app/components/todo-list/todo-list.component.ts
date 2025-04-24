import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [
    FormsModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  standalone: true,
})
export class TodoListComponent {
  todos = signal<string[]>([]);
  newTodo = model<string>('');

  addTodo(): void {
    const value = this.newTodo().trim();
    if (value) {
      this.todos.update(t => [...t, value]);
      this.newTodo.set('');
    }
  }

  removeTodo(index: number): void {
    this.todos.update(t => t.filter((_, i) => i !== index));
  }
}
