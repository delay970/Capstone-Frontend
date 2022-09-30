import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sutra } from '../models/sutra';

@Injectable({
  providedIn: 'root'
})
export class SutraService {

  url:string = 'http://localhost:8080/sutra/';

  constructor(private http: HttpClient) { }

  getSutras() : Observable<Sutra[]> {
    return this.http.get<Sutra[]>(this.url);
  }

  getOneSutra(id: string) : Observable<Sutra> {
    return this.http.get<Sutra>(this.url+id);
  }
}
