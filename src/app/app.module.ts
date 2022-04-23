import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PagesModule } from './pages/pages.module';
import { MenunewComponent } from './pages/menunew/menunew.component';



@NgModule({
  declarations: [
    AppComponent,
    MenunewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    AngularMaterialModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
