import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReorderRoutingModule } from './reorder-routing.module';
import { ReorderPageComponent } from './reorder-page/reorder-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ReorderPageComponent,
  ],
  imports: [
    CommonModule,
    ReorderRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    SharedModule
]
})
export class ReorderModule { }
