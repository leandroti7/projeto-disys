import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { navBarComponent } from './shared/nav-bar/nav-bar.component';
import { formComponent } from './shared/form/form.component';
import { tableBodyComponent } from './shared/table-body/table-body.component';
import { ButtonsComponent } from './shared/buttons/buttons.component';
import { ContentOnibusComponent } from './shared/content-onibus/content-onibus.component';
import { ContentLotacaoComponent } from './shared/content-lotacao/content-lotacao.component';
import { FooterComponent } from './shared/footer/footer.component';

import { TransportesService } from './transportes.service';

@NgModule({
  declarations: [
    AppComponent,
    navBarComponent,
    formComponent,
    tableBodyComponent,
    ButtonsComponent,
    ContentOnibusComponent,
    ContentLotacaoComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TransportesService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
