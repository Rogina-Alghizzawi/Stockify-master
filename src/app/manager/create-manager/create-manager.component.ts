import { Component } from '@angular/core';
import { LocationService } from 'src/app/Services/location.service';
import { UserService } from 'src/app/Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { InventoryService } from 'src/app/Services/inventory.service';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.css']
})
export class CreateManagerComponent {
  manager = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleId: 2,
    locationId: null,
    inventoryId: null, // Add this
    phone: '',
    active: 'Y',
    ImagePath: '',
    approvalStatus: 'Aproved',
  };
  

  locations: any[] = [];
  showPassword = false;

  inventories: any[] = [];
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  constructor(
    private userService: UserService,
    private locationService: LocationService,
    private inventoryService: InventoryService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.locationService.getAllLocations().subscribe(data => this.locations = data);
    this.inventoryService.getAllInventory().subscribe(data => {
      this.inventories = data;
    });
  }

  createManager() {
    console.log("Sending Manager Data:", this.manager);

    this.userService.addUser(this.manager).subscribe(
      response => {
        console.log('Manager created:', response);
        this.toastr.success('Manager created successfully');
        this.resetForm();
      },
      error => {
        console.error('Error creating manager:', error);
        this.toastr.error(`Error: ${error.error?.message || error.message}`);
      }
    );
  }

  resetForm() {
    this.manager = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      roleId: 2,
      locationId: null,
      inventoryId: null, // Add this
      phone: '',
      active: 'Y',
      ImagePath: '',
      approvalStatus: 'Aproved',
    };
    this.toastr.info('Form has been reset.');
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
          this.manager.ImagePath = resp.imagePath || resp.fileName;
          console.log('Assigned ImagePath:', this.manager.ImagePath);
          this.toastr.success('Image uploaded successfully');
        },
        error => {
          console.error('Image upload error:', error);
          this.toastr.error('Image upload failed');
        }
      );
    }
  }
}
