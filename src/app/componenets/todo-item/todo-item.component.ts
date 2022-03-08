import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!:Todo;
  @Input() i!:number;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckBox:EventEmitter<Todo>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onCheckClick(todo:Todo){
    this.todoCheckBox.emit(todo);  
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("On Click");
  }
}
