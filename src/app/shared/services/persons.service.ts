import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../entities/person';
import { HttpClient } from '@angular/common/http';
import { PERSONS } from '../constants/persons.const';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private persons: Person[] = [];

  constructor(private http: HttpClient) { }

  public getPersons(): Observable<Person[]> {
    if (this.persons.length) {
      return of(this.persons);
    }
    // return this.http.get<Person[]>(`${environment.baseUrl}/persons`);
    return of(PERSONS);
  }

  public addPerson(newPerson: Person): Observable<any> {
    return this.http.post(`${environment.baseUrl}/persons/new`, newPerson);
  }

  public editPerson(personId: number, editedPerson: Person): Observable<any> {
    return this.http.post(`${environment.baseUrl}/persons/${personId}`, editedPerson);
  }

  public removePerson(personId: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/persons/${personId}`);
  }
}
