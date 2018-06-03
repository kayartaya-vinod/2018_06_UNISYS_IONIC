import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// const baseUrl = 'http://localhost:3000/contacts/';
const baseUrl = 'http://kvinod.com/old_ci/randomdata/contacts/';

@Injectable()
export class ContactsProvider {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get(baseUrl + id);
  }

  add(contact: any): Observable<any> {
    return this.http.post(baseUrl, contact);
  }

  update(contact: any): Observable<any> {
    return this.http.put(baseUrl + contact.id, contact);
  }
  
  delete(id: number): Observable<any> {
    return this.http.delete(baseUrl + id);
  }
}
