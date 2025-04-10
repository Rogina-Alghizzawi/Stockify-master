import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReorderService {

  constructor(private http: HttpClient) { }

  // reorders:any=[];
  // getAllReordering(){
  //   this.http.get("https://localhost:7178/api/Reorder").subscribe(resp=>{
  //     this.reorders=resp;
  //   }, err=>{
  //     console.log(err);
  //   })
  // }


  getReorderItems(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:7004/api/Reorder");
  }



  getTrendingProducts(interval: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:7004/api/Reordering/trending-products?intervalType=${interval}`);
  }
  
  deleteReordering(id:number){
    this.http.delete("http://localhost:7004/api/Reorder/"+id).subscribe(resp=>{
      console.log("Done");
    }, err=>{
      console.log(err);
    })
  }


  createNewReorder(body:any){

    this.http.post("http://localhost:7004/api/Reorder",body).subscribe(resp=>{
      console.log("Created");
    }, err=>{
      console.log(err);
    })
  }


}
