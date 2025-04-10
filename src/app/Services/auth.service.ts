import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  totalUsers: number = 0;

  constructor(private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  login(body: any) {


    const headerDirc = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }

    const requestOptions = { headers: new HttpHeaders(headerDirc) }

    this.httpClient.post('http://localhost:7004/api/JWT/login', body, requestOptions)
      .subscribe((resp: any) => {
        const response = {
          token: resp.toString()
        }
       
        //save on localstorge
        localStorage.setItem('token', response.token);
        let data: any = jwtDecode(response.token);

        // localStorage.setItem('user', JSON.stringify(data))



        if (data.Role_Id == "21") {

          this.toastr.success('Welcome On Admin Dashbaord');

          this.router.navigate(['admin/dashbord']);

        }

        else if (data.Role_Id == "1") {

          this.toastr.success('Welcome On Home Page');
          this.router.navigate(['Dashboard/InventoryAnalytics']);

        }

      }, err => {
        this.toastr.error("invalid username/password");
      })

  }
  // register(body: any) {


  //   this.httpClient.post('https://localhost:7019/api/Login/Registration', body)
  //     .subscribe((resp) => {
  //       this.router.navigate(['auth/login']);
  //     }, (error: HttpErrorResponse) => {

  //       this.toastr.error(error.error)
  //     });


  // }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/']); // or your actual login route

  }
  // getTotalUsers() {
  //   this.httpClient.get('https://localhost:7019/api/Login/CountUser')
  //     .subscribe(
  //       (result: any) => {
  //         this.totalUsers = result;

  //       },
  //       error => {
  //         this.toastr.error("error");
  //       }
  //     );


getTokenPayload(): any {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Invalid token');
    return null;
  }
}

  }

