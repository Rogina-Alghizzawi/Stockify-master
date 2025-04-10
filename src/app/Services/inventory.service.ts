import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://localhost:7004/api/Inventory';

  constructor(private http: HttpClient) { }

  getAllInventory(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addInventory(inventory: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, inventory);
  }
}
