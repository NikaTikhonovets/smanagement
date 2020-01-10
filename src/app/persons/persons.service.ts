import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Person } from '../shared/entities/person';
import { HttpClient } from '@angular/common/http';
import {PERSONS} from '../shared/constants/persons.const';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) { }

  public getPersons(): Observable<Person[]> {
    // return this.http.get<Person[]>(`${environment.baseUrl}/persons`);
    return of(PERSONS);
  }

  public addPerson(newPerson: Person): Observable<any> {
    return this.http.post(`${environment.baseUrl}/persons/new`, newPerson);
  }

  public removePerson(personId: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/persons/${personId}`);
  }
}
