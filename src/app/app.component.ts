import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <busyo-form></busyo-form>
    <br>
    <my-sizer [(size)]="fontSizePx"></my-sizer>
    <div [style.font-size.px]="fontSizePx">大きさ変わる文字列</div>
    `,
})
export class AppComponent  { 
  name = 'Angular';
  fontSizePx = 20;
}
