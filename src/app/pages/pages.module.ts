import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { VideocateforiesComponent } from './videocatefories/videocatefories.component';
import { PagesRoutingModule } from './pages-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    VideocateforiesComponent,
    DashbordComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AngularMaterialModule
  ]
})
export class PagesModule { }
