import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Aerolinea } from './aerolinea';

@Injectable({
  providedIn: 'root'
})
export class AerolineaService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAerolineas(): Observable<Aerolinea[]> {
    return this.http.get<Aerolinea[]>(this.apiUrl);
  }

}
