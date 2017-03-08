import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>はじめまして {{name}} !</h1>
    <p>{{name}}って難しそうですけどがんばるぞ</p>`,
})
export class AppComponent  { name = 'Angular'; }
