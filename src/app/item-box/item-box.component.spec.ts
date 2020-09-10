import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBoxComponent } from './item-box.component';

describe('ItemBoxComponent', () => {
  let component: ItemBoxComponent;
  let fixture: ComponentFixture<ItemBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raised the del_item event when delitem triggered', ()=>{
    let obj = document.createElement('div');
    obj.innerText = 'aaa';
    spyOn(component.del_item, 'emit');
    component.deleteItem(obj);
    expect(component.del_item.emit).toHaveBeenCalled();
  })
});
