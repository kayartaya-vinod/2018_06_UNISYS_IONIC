import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const baseUrl = 'http://localhost:3000/contacts/';
// const baseUrl = 'http://kvinod.com/old_ci/randomdata/contacts/';

@Injectable()
export class ContactsProvider {

  constructor(private http: HttpClient) {
  }

  getById(id): Observable<any> {
    return this.http.get(baseUrl + id);
  }
}
