import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';   //Necessary to suppress errors using web components
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule }                      from '@angular/forms';

import { AppComponent }   from './app.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ] //Necessary to suppress errors using web components
})
export class AppModule { }
