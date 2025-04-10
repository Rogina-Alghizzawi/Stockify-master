import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StockService } from '../../Services/stock.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  categories: any[] = [];
  statusList: any[] = [];
  inventoryList: any[] = [];
  suppliers: any[] = [];

  addProductForm: FormGroup;

  constructor(
    private stockService: StockService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.addProductForm = this.fb.group({
      name: [null, [Validators.required]],
      categoryId: [null, [Validators.required]],
      price: [null, [Validators.required]],
      barcode: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      status: [null, [Validators.required]],
      supplierName: [null, [Validators.required]],
      inventoryName: [null, [Validators.required]],
      unitMeasurement: [null, [Validators.required]],
      description: [null, [Validators.required]],
      imagePath: [null]
    });
  }

  ngOnInit(): void {
    this.stockService.getCategories().subscribe(
      (data) => this.categories = data,
      (error) => {
        console.error('Error fetching categories', error);
        this.toastr.error('Failed to load categories');
      }
    );

    this.stockService.getInventory().subscribe(
      (data) => this.inventoryList = data,
      (error) => {
        console.error('Error fetching inventories', error);
        this.toastr.error('Failed to load inventories');
      }
    );

    this.stockService.getStatus().subscribe(
      (data) => this.statusList = data,
      (error) => {
        console.error('Error fetching status', error);
        this.toastr.error('Failed to load status list');
      }
    );

    this.stockService.getSuppliers().subscribe(
      (data) => this.suppliers = data,
      (error) => {
        console.error('Error fetching suppliers', error);
        this.toastr.error('Failed to load suppliers');
      }
    );
  }

  uploadImage(event: Event) {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      const fileToUpload = element.files[0];
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);

      this.stockService.uploadProductImage(formData).subscribe(
        (resp: any) => {
          this.addProductForm.patchValue({
            imagePath: resp.imagePath || resp.fileName
          });
          console.log('ImagePath:', this.addProductForm.value.imagePath);
          this.toastr.success('Image uploaded successfully');
        },
        (error) => {
          console.error('Error uploading image:', error);
          this.toastr.error('Image upload failed');
        }
      );
    }
  }

  Create() {
    const formData = this.addProductForm.value;

    formData.supplierId = Number(formData.supplierName);
    delete formData.supplierName;

    formData.inventoryId = Number(formData.inventoryName);
    delete formData.inventoryName;

    console.log("Submitting product:", formData);

    this.stockService.createNewProduct(formData).subscribe(
      (response) => {
        console.log('Product created:', response);
        this.toastr.success('Product created successfully');
        this.addProductForm.reset(); // Optional: reset form after success
      },
      (error) => {
        console.error('Error creating product:', error);
        this.toastr.error('Failed to create product');
      }
    );
  }
}
