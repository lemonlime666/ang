import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {
  @Output('add-to-do') addToDoItem = new EventEmitter();

  public textHolder: string = "Something To Do";
  public todoTxt: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  public addToDo(): void{
    if(this.todoTxt){
      this.addToDoItem.emit(this.todoTxt);
      this.todoTxt = '';
    }
  }
}
