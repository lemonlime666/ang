import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  viewMode = 'todo';
  public todoList: string[] = [];
  public doneList: string[] = []; 

  public getToDo(data: string): void{
    this.todoList.push(data);
  }

  public deleteFromList($event: any): void{
    let which = this.todoList.indexOf($event);
    this.todoList.splice(which, 1);
    this.doneList.push($event);
  }

}
