import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  localItem:string | null;
  
  constructor() { 
    this.localItem=localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos=[];
    }
    else{
      this.todos=JSON.parse(this.localItem);
    }
    // this.todos= [
    //   {
    //     sno:3,
    //     title:"T3",
    //     desc:"Des3",
    //     active:true
    //   },
    //   {
    //     sno:1,
    //     title:"T1",
    //     desc:"Des3",
    //     active:true
    //   },
    //   {
    //     sno:2,
    //     title:"T2",
    //     desc:"Des2",
    //     active:true
    //   }
    // ]
  }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1); // Delete only one element after that index.
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleCheckbox(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active= !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
