import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BeforeFilterComponent } from './before-filter/before-filter.component';

@NgModule({
  declarations: [
    App,
    NavbarComponent,
    FilterComponent,
    FooterComponent,
    BeforeFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
