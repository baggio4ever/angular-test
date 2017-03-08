import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>はじめまして {{name}} !</h1>
    <busyo-form></busyo-from>
    `,
})
export class AppComponent  { 
  name = 'Angular';
}
