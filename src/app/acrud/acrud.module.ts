import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcrudRoutingModule } from './acrud-routing.module';
import { CrateadminComponent } from './crateadmin/crateadmin.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CrateadminComponent,
    DeleteComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    AcrudRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AcrudModule { }
