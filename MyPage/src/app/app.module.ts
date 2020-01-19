import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationBarComponent } from './Component/navegation-bar/navegation-bar.component';
import { CristianCaravergaComponent } from './Component/cristian-caraverga/cristian-caraverga.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationBarComponent,
    CristianCaravergaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
