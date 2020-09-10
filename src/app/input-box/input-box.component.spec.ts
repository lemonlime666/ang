import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputBoxComponent } from './input-box.component';

describe('InputBoxComponent', () => {
  let component: InputBoxComponent;
  let fixture: ComponentFixture<InputBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not emit anything if todoTxt is null', ()=>{
    component.todoTxt = '';  
    spyOn(component.addToDoItem, 'emit');
    component.addToDo();
    expect(component.addToDoItem.emit).not.toHaveBeenCalled();
  })

  it('should raised addToDoItem event if todoTxt is given a value', ()=>{
    component.todoTxt = 'item';  
    spyOn(component.addToDoItem, 'emit');
    component.addToDo();
    expect(component.addToDoItem.emit).toHaveBeenCalled();
  })

});

