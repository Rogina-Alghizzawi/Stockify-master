import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ToastrModule

  ],

  exports:[
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ToastrModule
  ]

})
export class SharedModule { }
