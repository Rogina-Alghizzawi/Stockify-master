import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { LocationService } from 'src/app/Services/location.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crateadmin',
  templateUrl: './crateadmin.component.html',
  styleUrls: ['./crateadmin.component.css']
})
export class CrateadminComponent {
  admin = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleId: 1,
    locationId: null,
    phone: '',
    active: 'N',
    ImagePath: '',
    approvalStatus: 'Aproved',
  };
  showPassword = false;
  locations: any[] = [];

  constructor(
    private userService: UserService,
    private locationService: LocationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.locationService.getAllLocations().subscribe(data => this.locations = data);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  createAdmin() {
    console.log('Submitting admin:', this.admin);

    this.userService.addUser(this.admin).subscribe({
      next: () => this.toastr.success('Admin created successfully'),
      complete: () => {
        this.resetForm();
        console.log('Admin creation completed');
      },
      error: err => {
        console.error('Error creating admin:', err);
        if (err.error) {
          this.toastr.error('Error: ' + JSON.stringify(err.error));
        } else {
          this.toastr.error('Unexpected error occurred.');
        }
      }
    });
  }

  resetForm() {
    this.admin = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      roleId: 1,
      locationId: null,
      phone: '',
      active: 'Y',
      ImagePath: '',
      approvalStatus: 'Aproved',
    };
    this.toastr.info('Form reset.');
  }

  uploadimage(event: Event) {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      const fileToUpload = element.files[0];
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);

      this.userService.uploadAtachment(formData).subscribe(
        (resp: any) => {
          console.log('Image upload response:', resp);
          this.admin.ImagePath = resp.imagePath || resp.fileName;
          console.log('Assigned ImagePath:', this.admin.ImagePath);
          this.toastr.success('Image uploaded successfully');
        },
        error => {
          console.error('Image upload error:', error);
          this.toastr.error('Failed to upload image');
        }
      );
    }
  }
}
