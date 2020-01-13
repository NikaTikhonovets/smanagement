import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Skill } from '../entities/skill';
import { SKILLS } from '../constants/skills.const';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills: Skill[] = [];

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skill[]> {
    if (this.skills.length) {
      return of(this.skills);
    }
    // return this.http.get<Person[]>(`${environment.baseUrl}/skills`);
    return of(SKILLS);
  }

  public addSkill(newSkill: Skill): Observable<any> {
    return this.http.post(`${environment.baseUrl}/skills/new`, newSkill);
  }

  public removeSkill(personId: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/skills/${personId}`);
  }
}
