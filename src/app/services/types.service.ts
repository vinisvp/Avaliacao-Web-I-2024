import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Type } from '../features/types/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  url = 'http://localhost:3000/type/';

  constructor(private http: HttpClient) { }

  postType(type: Type): Observable<Type>{
    return this.http.post<Type>(this.url, type);
  }

  getType(): Observable<Type[]>{
    return this.http.get<Type[]>(this.url);
  }
}
