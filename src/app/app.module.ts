import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { BusyoFormComponent } from './busyo-form.component';
import { SizerComponent } from './sizer.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    BusyoFormComponent,
    SizerComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
