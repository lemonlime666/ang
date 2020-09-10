import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { ItemBoxComponent } from './item-box/item-box.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    ItemBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
