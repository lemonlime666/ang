import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.scss']
})
export class ItemBoxComponent implements OnInit {

  @Input('item-list') itemList: string[];
  @Input('done-list') doneList: string[];
  @Output('del-item') del_item = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public deleteItem(data): void{
    this.del_item.emit(data);
  }
}
