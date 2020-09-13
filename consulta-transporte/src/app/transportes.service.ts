import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransportesService {
  constructor(private http: HttpClient) {}

  listarOnibus() {
    return this.http.get(
      'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o'
    );
  }
  listarLotacao() {
    return this.http.get(
      'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l'
    );
  }
  listarItinerario() {
    return this.http.get(
      'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=30'
    );
  }
}
