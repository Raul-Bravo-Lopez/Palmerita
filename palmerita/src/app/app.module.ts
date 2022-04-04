import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PalmeraComponent } from './features/palmera/palmera.component';
import { ProductListComponent } from './features/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PalmeraComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
