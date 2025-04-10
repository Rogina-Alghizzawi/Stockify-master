import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service'; // adjust path
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html'
})
export class DeleteComponent {

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  confirmDelete() {
    const payload = this.authService.getTokenPayload();
    const userId = payload?.ID; // 🟢 Correct key from your token
  
    console.log("User ID from token:", userId); // for debugging
  
    if (userId) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          this.toastr.success("Account deleted successfully.");
          localStorage.clear();
          this.router.navigate(['']);
        },
        error: (err) => {
          this.toastr.error("Failed to delete account.");
          console.error(err);
        }
      });
    } else {
      this.toastr.error("User ID not found in token.");
    }
  }
  
  
}
