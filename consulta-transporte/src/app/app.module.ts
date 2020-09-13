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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableAutoComponent } from './shared/table-auto/table-auto.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ContentItinerarioComponent } from './shared/content-itinerario/content-itinerario.component';
import { ListItinerarioComponent } from './shared/list-itinerario/list-itinerario.component';

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
    TableAutoComponent,
    ContentItinerarioComponent,
    ListItinerarioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatTableModule, MatPaginatorModule, MatSortModule],
  providers: [TransportesService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
