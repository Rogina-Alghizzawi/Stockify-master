import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  user: any = {};

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const tokenData = this.authService.getTokenPayload();

    if (tokenData && tokenData.ID) {
      const userId = Number(tokenData.ID);
      this.userService.getUserById(userId).subscribe({
        next: (res) => {
          this.user = res;
        },
        error: (err) => {
          console.error('Failed to load user', err);
        }
      });
    }
  }
}
