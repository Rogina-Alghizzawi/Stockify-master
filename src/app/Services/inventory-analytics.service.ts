import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryAnalyticsService {

  private baseUrl = 'http://localhost:7004/api/InventoryAnalytics';

  constructor(private http: HttpClient) { }

  getInventoryTrends() {
    return this.http.get(`${this.baseUrl}/trends`);
  }

  getInventoryReport(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:7004/api/StockHistory/inventory-report');
  }
  

  getCategoryStats() {
    return this.http.get(`${this.baseUrl}/categories/stats`);
  }

  getTrendingProducts(interval: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:7004/api/Reordering/trending-products?intervalType=${interval}`);
  }

  getStockCategoryDistribution(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:7004/api/StockHistory/GetStockLevels`);
  }

getUserCount(): Observable<number> {
  return this.http.get<number>('http://localhost:7004/api/Users/NumberOfUsers');
}

getActiveUsers(): Observable<number> {
  return this.http.get<number>('http://localhost:7004/api/Users/count?active=Y');
}

getInactiveUsers(): Observable<number> {
  return this.http.get<number>('http://localhost:7004/api/Users/count/inactive');
}


}
