import { Component } from '@angular/core';
import { Busyo } from './busyo';

@Component({
  selector: 'my-app',
  template: `
    <h1>はじめまして {{name}} !</h1>
    <p>{{name}}って難しそうですけどがんばるぞ</p>`,
})
export class AppComponent  { 
  name = 'Angular';

  myBusyo = new Busyo(2,'山','大火事');
}
