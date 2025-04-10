import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../Services/inventory.service';
import { LocationService } from '../../Services/location.service';
import { SupplierService } from '../../Services/supplier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-inventory',
  templateUrl: './create-inventory.component.html'
})
export class CreateInventoryComponent implements OnInit {
  inventory: any = {
    name: '',
    supplierId: null,
    locationId: null,
    type: '',
  };

  inventoryTypes: string[] = ['Primary', 'Secondary', 'Transit', 'Retail', 'Bulk', 'Damaged'];
  locations: any[] = [];
  suppliers: any[] = [];

  constructor(
    private inventoryService: InventoryService,
    private locationService: LocationService,
    private supplierService: SupplierService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.locationService.getAllLocations().subscribe(
      data => this.locations = data,
      err => this.toastr.error('Failed to load locations')
    );

    this.supplierService.getAllSuppliers().subscribe(
      data => this.suppliers = data,
      err => this.toastr.error('Failed to load suppliers')
    );
  }

  onSubmit() {
    this.inventoryService.addInventory(this.inventory).subscribe({
      next: () => this.toastr.success('Inventory added successfully'),
      error: (err) => {
        console.error('Error adding inventory:', err);
        this.toastr.error('Failed to add inventory');
      }
    });
  }
}
