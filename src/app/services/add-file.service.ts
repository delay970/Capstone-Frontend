import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFileService {

  url:String = 'http://localhost:8080/file/';

  constructor(private http: HttpClient) { }

  postFile(file: File): Observable<any>{
    return this.http.post<any>(this.url + file.name, file);
  }

  clearFiles(): Observable<any>{
    return this.http.get<any>(this.url + 'clear');
  }
}
