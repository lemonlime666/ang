import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { componentFactoryName } from '@angular/compiler';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todo');
  });
  
  it('getToDo, should push data in the todoList', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    app.getToDo('item');
    expect(app.todoList.length).toBe(1);
  })

  it('deleteFromList, should delete from todolist && push into donList', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    let proxy = 'item'
    app.todoList = [proxy];
    app.doneList = [];
    app.deleteFromList(proxy);
    expect(app.todoList.length).toBe(0);
    expect(app.doneList.length).toBe(1);
  })
});
