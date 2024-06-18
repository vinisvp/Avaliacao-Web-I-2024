import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../features/contacts/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url = 'http://localhost:3000/contact';

  constructor(private http: HttpClient) {}

  postContact(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>(this.url, contact);
  }

  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.url);
  }

  deleteContact(contact: Contact): Observable<void>{
    return this.http.delete<void>(`${this.url}/${contact.id}`);
  }
}
