import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TASKS } from '../constants/tasks.const';
import { environment } from '../../../environments/environment';
import { Task } from '../entities/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [];

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    if (this.tasks.length) {
      return of(this.tasks);
    }
    // return this.http.get<Task[]>(`${environment.baseUrl}/tasks`);
    return of(TASKS);
  }

  public addTask(newTask: Task): Observable<any> {
    return this.http.post(`${environment.baseUrl}/tasks/new`, newTask);
  }

  public editTask(taskId: number, editedTask: Task): Observable<any> {
    return this.http.post(`${environment.baseUrl}/tasks/${taskId}`, editedTask);
  }

  public removeTask(taskId: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/tasks/${taskId}`);
  }
}
