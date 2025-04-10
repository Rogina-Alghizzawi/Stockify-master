import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private baseUrl = 'http://localhost:7004/api/Suppliers';

  constructor(private http: HttpClient) {}

  getAllSuppliers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
