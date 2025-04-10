import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { CreateManagerComponent } from './create-manager/create-manager.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateManagerComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule,
    SharedModule
  
  ]
})
export class ManagerModule { }
