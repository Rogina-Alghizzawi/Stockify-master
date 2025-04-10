import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/Services/inventory.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  center = { lat: 31.963158, lng: 35.930359 }; 
  zoom = 8;
  locations: any[] = []; 
  filteredLocations: any[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadInventoryLocations();
  }

  loadInventoryLocations(): void {
    this.inventoryService.getAllInventory().subscribe(
      (data) => {
        this.locations = data.map(item => ({
          lat: item.location.latitude,
          lng: item.location.longitude,
          name: item.name,
          type: item.type 
        }));
        this.filteredLocations = [...this.locations]; 
      },
      (error) => {
        console.error('Error fetching inventory locations', error);
      }
    );
  }

  filterLocations(event: Event): void {
    const selectedType = (event.target as HTMLSelectElement).value;
  
    if (selectedType === 'all') {
      this.loadInventoryLocations();
    } else {
      this.locations = this.locations.filter(location => location.type.trim() === selectedType);
    }
  }


}
