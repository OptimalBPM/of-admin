/**
 * Created by nicklasborjesson on 2017-02-26.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';

console.assert(AppComponent, "Uhoh, AppComponent was not defined, likely part of a circular reference loop");
console.assert(Title, "Uhoh, Title was not defined, likely part of a circular reference loop");
console.assert(NgModule, "Uhoh, NgModule was not defined, likely part of a circular reference loop");
console.assert(BrowserModule, "Uhoh, BrowserModule was not defined, likely part of a circular reference loop");
console.assert(FormsModule, "Uhoh, FormsModule was not defined, likely part of a circular reference loop");

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Title
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
