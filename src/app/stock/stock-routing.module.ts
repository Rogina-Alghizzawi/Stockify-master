import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockLevelsComponent } from './stock-levels/stock-levels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
const routes: Routes = [
  {
    path: 'stocklevel',
    component : StockLevelsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule
    
  ],
  exports: [RouterModule,
    MatFormFieldModule    
  ]
})
export class StockRoutingModule { }
