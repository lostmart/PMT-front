import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceTsService {
  private apiUrl = environment.apiUrl + '/api/health';

  constructor(private http: HttpClient) {}

  // // Simple test call to backend
  pingBackend(): Observable<any> {
    return this.http
      .get(`${this.apiUrl}`, { responseType: 'json' })
      .pipe(delay(100));
  }
}
