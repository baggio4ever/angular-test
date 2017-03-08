import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>はじめまして {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
