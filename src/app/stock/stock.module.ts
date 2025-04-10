import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockLevelsComponent } from './stock-levels/stock-levels.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CreateProductComponent } from './create-product/create-product.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    StockLevelsComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
]
})
export class StockModule { }
