import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private baseUrl = 'http://localhost:7004/api/Location';

  constructor(private http: HttpClient) {}

  getAllLocations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
