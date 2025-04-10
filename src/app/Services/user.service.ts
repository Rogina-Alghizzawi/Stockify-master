import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:7004/api/Users'; // Users API

  constructor(private http: HttpClient) {}

 

  // ✅ Get All Users (Authenticated Request)
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ✅ Get User by ID
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // ✅ Create a New User (Admin)
  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  // ✅ Update an Existing User
  updateUser(id: number, userData: any): Observable<any> {
    return this.http.put(`http://localhost:7004/api/Users/${id}`, userData);
  }
  
  // ✅ Delete a User
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cascade-delete/${userId}`);
  }



  getPendingUsersByRole(roleId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:7004/api/Users/pending?roleId=${roleId}`);
  }
  

  approveUser(userId: number): Observable<any []> {
  return this.http.post<any[]>(`http://localhost:7004/api/Users/approve/${userId}`, {});

  }

  getUserCount(): Observable<number> {
    return this.http.get<number>('http://localhost:7004/api/Users/NumberOfUsers');
  }
  
  
  getLeftUsersCount(): Observable<number> {
    return this.http.get<number>('http://localhost:7004/api/Users/left-count');
  }
  rejectUser(userId: number): Observable<any> {
    return this.http.post<any[]>(`http://localhost:7004/api/Users/reject/${userId}`, {});
  }
  
  
  updateUserStatus(userId: number, status: string): Observable<any> {
    return this.http.put(`http://localhost:7004/api/Users/${userId}/status`, { active: status });
  }
  
  uploadAtachment(formData: FormData): Observable<any> { 
    
    return this.http.post("http://localhost:7004/api/Users/UploadImage",formData)
}
uploadUserImage(formData: FormData) {
  return this.http.post<any>('http://localhost:7004/api/Users/UploadImage', formData);
}

}
