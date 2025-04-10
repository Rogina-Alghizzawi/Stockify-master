import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {
  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    ImagePath: '',
    locationId: null,
  };

  showPassword = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const tokenData = this.authService.getTokenPayload();

    if (tokenData && tokenData.ID) {
      const userId = Number(tokenData.ID);

      this.userService.getUserById(userId).subscribe({
        next: (res) => {
          this.user = res;
          this.user.userId = userId;
        },
        error: (err) => {
          console.error('Error loading user:', err);
          this.toastr.error('Failed to load user data');
        }
      });
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  updateProfile() {
    if (!this.user.userId) {
      this.toastr.warning('Missing user ID for update');
      return;
    }

    this.userService.updateUser(this.user.userId, this.user).subscribe({
      next: () => this.toastr.success('Profile updated successfully'),
      error: (err) => this.toastr.error('Update failed: ' + (err.error?.message || err.message))
    });
  }

  uploadimage(files: FileList | null, fieldName: string) {
    if (!files || files.length === 0) return;

    const fileToUpload = files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.userService.uploadAtachment(formData).subscribe(
      (res: any) => {
        this.user.ImagePath = res.imagePath || res.fileName;
        this.toastr.success('Image uploaded successfully');
      },
      (err) => {
        console.error('Image upload error:', err);
        this.toastr.error('Image upload failed');
      }
    );
  }

  resetForm() {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      ImagePath: '',
      locationId: null,
    };
    this.toastr.info('Form has been reset');
  }

  goBack() {
    window.history.back();
  }
}
