import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';

import { NavbarComponent} from 'src/app/shared/navbar/navbar.component';
import { SidebarComponent} from 'src/app/shared/sidebar/sidebar.component';

@Component({
  selector: 'app-staff-approval',
  templateUrl: './staff-approval.component.html',
  styleUrls: ['./staff-approval.component.css']
})
export class StaffApprovalComponent implements OnInit {
  pendingUsers: any[] = [];
  allUsers: any[] = [];
  loading = false;
  error: string = '';
  activeTab: string = 'pending';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  switchTab(tab: string): void {
    this.activeTab = tab;
    this.loadUsers();
  }

  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          this.allUsers = this.allUsers.filter(u => u.id !== userId);
        },
        error: (err) => {
          console.error('Error deleting user:', err);
        }
      });
    }
  }
  loadUsers(): void {
    this.loading = true;
    this.error = '';

    if (this.activeTab === 'pending') {
      this.userService.getPendingUsersByRole(3).subscribe({
        next: (data) => {
          this.pendingUsers = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load pending users.';
          this.loading = false;
        }
      });
    } else {
      this.userService.getAllUsers().subscribe({
        next: (data) => {
          this.allUsers = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load all users.';
          this.loading = false;
        }
      });
    }
  }

  approve(userId: number): void {
    this.userService.approveUser(userId).subscribe({
      next: () => {
        this.pendingUsers = this.pendingUsers.filter(u => u.id !== userId);
      },
      error: () => {
        this.error = 'Failed to approve user.';
      }
    });
  }

  reject(userId: number): void {
    this.userService.rejectUser(userId).subscribe({
      next: () => {
        this.pendingUsers = this.pendingUsers.filter(u => u.id !== userId);
      },
      error: () => {
        this.error = 'Failed to reject user.';
      }
    });
  }

  toggleUserStatus(user: any): void {
    user.statusLoading = true;
    const newStatus = user.active === 'Y' ? 'N' : 'Y';
  
    this.userService.updateUserStatus(user.id, newStatus).subscribe({
      next: () => {
        user.active = newStatus;
        user.statusLoading = false;
      },
      error: (err) => {
        console.error('Error updating status:', err);
        user.statusLoading = false;
      }
    });
  }
  
}
