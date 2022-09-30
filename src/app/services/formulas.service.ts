import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NGram } from '../models/ngram';

@Injectable({
  providedIn: 'root'
})
export class FormulasService {

  url:string = 'http://localhost:8080/formula/';

  constructor(private http: HttpClient) { }  
  
  
  getFormulas(sutra1:number, sutra2:number) : Observable<NGram[]> {
    if(sutra1 == sutra2){
      return this.http.get<NGram[]>(this.url+sutra1);
    }
    if(sutra1 < sutra2){
      return this.http.get<NGram[]>(this.url+sutra1+'/'+sutra2);
    }
      return this.http.get<NGram[]>(this.url+sutra2+'/'+sutra1);
  }
}
