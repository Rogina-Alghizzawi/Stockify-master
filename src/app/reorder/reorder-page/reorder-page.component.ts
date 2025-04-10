import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReorderService } from 'src/app/Services/reorder.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-reorder-page',
  templateUrl: './reorder-page.component.html',
  styleUrls: ['./reorder-page.component.css']
})
export class ReorderPageComponent implements OnInit {
  reorderItems: any[] = [];
  filteredReorderItems: any[] = []; 
  searchText: string = '';
  @ViewChild('DeleteDialog') deleteDialog!:TemplateRef<any>;
  constructor(public reorderService:ReorderService, public dialog: MatDialog){}
ngOnInit(): void {
  this.fetchReorderItems();
  }

  fetchReorderItems(): void {
    this.reorderService.getReorderItems().subscribe((data) => {
      console.log("API Response:", data);
  
      if (data && data.length > 0) {
        this.reorderItems = data.map(item => ({
          reorderId: item.ID || item.id,
          productName: item.product?.name || "N/A",
          supplierName: item.supplier?.name || "N/A",
          thresholdQuantity: item.THRESHOLD_QUANTITY || item.thresholdQuantity,
          operator: item.OPERATOR || item.operator,
          reorderQuantity: item.QUANTITY_1 || item.quantity,
          reorderCreatedAt: item.CREATED_AT_1 || item.createdAt
        }));
  
        this.filteredReorderItems = [...this.reorderItems]; // Initially show all
      } else {
        console.warn("No data received.");
      }
    });
  }
  

  performSearch(): void {
    const searchTerm = this.searchText.trim().toLowerCase();
    
    console.log("Search Input:", searchTerm);
    console.log("Before Filtering:", this.reorderItems.length, this.reorderItems);

    if (searchTerm === '') {
        this.filteredReorderItems = [...this.reorderItems]; // Reset if empty search
    } else {
        this.filteredReorderItems = this.reorderItems.filter(reorder =>
            reorder.productName?.toLowerCase().includes(searchTerm)
        );
    }

    console.log("After Filtering:", this.filteredReorderItems.length, this.filteredReorderItems);
}


  exportToPDF(): void {
    const doc = new jsPDF();
    doc.text("Reorder Items Report", 14, 10);

    autoTable(doc, {
      head: [['Reorder ID', 'Product Name', 'Supplier Name', 'Threshold Quantity', 'Operator', 'Quantity', 'Created At']],
      body: this.reorderItems.map(item => [
        item.reorderId,
        item.productName,
        item.supplierName,
        item.thresholdQuantity,
        item.operator,
        item.reorderQuantity,
        item.reorderCreatedAt
      ]),
      startY: 20
    });

    doc.save('Reorder_Items.pdf');
  }



  
}
