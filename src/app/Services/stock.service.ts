import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  
  constructor(private http: HttpClient) {}

  stocks:any=[];
  getAllStocks(): Observable<any[]> {  
    return this.http.get<any[]>("http://localhost:7004/api/Products");
  }

  deleteStock(id:number){
    this.http.delete("http://localhost:7004/api/Products/"+id).subscribe(resp=>{
      console.log("Done");
    }, err=>{
      console.log(err);
    })
  }

 

  createNewProduct(body: any): Observable<any> {
    return this.http.post("http://localhost:7004/api/Products", body);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:7004/api/Category");
  }

  getStatus(): Observable<any> {
    return this.http.get("http://localhost:7004/api/ProductStatus");
  }

  getInventory(): Observable<any> {
    return this.http.get("http://localhost:7004/api/Inventory");
  }

  getSuppliers(): Observable<any> {
    return this.http.get("http://localhost:7004/api/Suppliers");
  }


  uploadProductImage(formData: FormData): Observable<any> { 
    return this.http.post("http://localhost:7004/api/Products/UploadImage", formData);
  }

}
