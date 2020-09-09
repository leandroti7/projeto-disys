import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { navBarComponent } from './shared/nav-bar/nav-bar.component';
import { formComponent } from './shared/form/form.component';
import { tableBodyComponent } from './shared/table-body/table-body.component';

@NgModule({
  declarations: [
    AppComponent,
    navBarComponent,
    formComponent,
    tableBodyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
