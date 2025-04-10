import { Component,OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StockService } from 'src/app/Services/stock.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CreateProductComponent } from '../create-product/create-product.component';
@Component({
  selector: 'app-stock-levels',
  templateUrl: './stock-levels.component.html',
  styleUrls: ['./stock-levels.component.css']
})
export class StockLevelsComponent implements OnInit {
  stockItems: any[] = [];
  filteredStockItems: any[] = []; 
  searchText: string = ''; 

  constructor(public stockService: StockService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchStockItems();  
  }

  fetchStockItems(): void {
    this.stockService.getAllStocks().subscribe((data) => {
      console.log("API Response:", data);
      if (data && data.length > 0) {
        this.stockItems = data.map(item => ({
          id: item.ID || item.id,
          name: item.NAME || item.name,
          categoryName: item.category?.name || "N/A",
          price: item.PRICE || item.price,
          barcode: item.BARCODE || item.barcode,
          quantity: item.QUANTITY || item.quantity,
          status: item.STATUS || item.status,
          supplierName: item.supplier?.name || "N/A",
          inventoryName: item.inventory?.name || "N/A",
          unitMeasurement: item.UNIT_MEASUREMENT || item.unitMeasurement,
          description: item.DESCRIPTION || item.description,
          createdAt: item.CREATED_AT || item.createdAt,
          modifyTime: item.MODIFY_TIME || item.modifyTime,
          imagePath: item.IMAGE_PATH || item.imagePath
        }));

        this.filteredStockItems = [...this.stockItems]; // Initially show all
      } else {
        console.warn("No data received.");
      }
    });
  }

  // Function triggered when clicking search button
  performSearch(): void {
    const searchTerm = this.searchText.trim().toLowerCase();
    
    console.log("Search Input:", searchTerm);
    console.log("Before Filtering:", this.stockItems.length, this.stockItems);

    if (searchTerm === '') {
        this.filteredStockItems = [...this.stockItems]; // Reset if empty search
    } else {
        this.filteredStockItems = this.stockItems.filter(stock =>
            stock.name?.toLowerCase().includes(searchTerm)
        );
    }

    console.log("After Filtering:", this.filteredStockItems.length, this.filteredStockItems);
}

exportToPDF(): void {
  const doc = new jsPDF();
  doc.text("Stock Items Report", 14, 10);

  autoTable(doc, {
    head: [['ID', 'Name', 'Category ID', 'Price', 'Barcode', 'Quantity', 'Status', 'Supplier ID', 'Inventory ID', 'Unit Measurement', 'Description', 'Created At', 'Modify Time']],
    body: this.stockItems.map(item => [
      item.id,
      item.name,
      item.categoryId,
      item.price,
      item.barcode,
      item.quantity,
      item.status,
      item.supplierId,
      item.inventoryId,
      item.unitMeasurement,
      item.description,
      item.createdAt,
      item.modifyTime
    ]),
    startY: 20
  });

  doc.save('Stock_Items.pdf');
}

openCreateDialog(): void {
  const dialogRef = this.dialog.open(CreateProductComponent, {
    width: '500px',  // Adjust the dialog width as needed
    data: {}  // You can pass data if needed
  });

  dialogRef.afterClosed().subscribe(result => {
    // Handle any actions after closing the dialog if needed
  }); 

   
}
}
